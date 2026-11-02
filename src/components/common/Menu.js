import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import useMeasure from 'react-use-measure';

import { routes } from "@/utils/routesPath";

import MenuPortal from "./MenuPortal";

import * as styles from "./Menu.module.scss";

const menuItems = [
  { ...routes.home },
  { ...routes.about },
  {
    label: 'Services',
    children: [
      { ...routes["architectural-visualization"] },
			{ ...routes["3d-modeling"] },
			{ ...routes["technical-drawings"] },
			{ ...routes["product-visualization"] },
			{ ...routes["3d-animation-and-experiences"] },
			{ ...routes["360-degree-and-virtual-tours"] },
    ],
  },
	{ ...routes.portfolio },
  { ...routes["contact-us"] },
  // { ...routes.faq },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren', // Wait for children to finish exiting
      delay: 0,             // Delay to match children exit duration
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.3 } },
  exit: { y: -60, opacity: 0, transition: { duration: 0.5 } },
};

function Menu() {
	const [showMenu, setShowMenu] = useState(false);
	const [submenuOpen, setSubmenuOpen] = useState(false);

	const [ref, bounds] = useMeasure();

	const navigate = useNavigate();

	const handleLinkClick = (e, to) => {
		e.preventDefault();
		// Close menu
		setSubmenuOpen(false);

		// 2. Wait for the submenu exit animation to finish (~400ms)
		setTimeout(() => {
			// Then close the main menu
			setShowMenu(false);

			// 3. Navigate after all animations are done
			setTimeout(() => {
				navigate(to);
			}, 50); // slight buffer after menu close
		}, 50); // same as submenu exit duration
	};

	const hideMenu = () => {
		setSubmenuOpen(false);

		setTimeout(() => {
			setShowMenu(false);
		}, 50);
	};

	return (
		<>
			<Hamburger color="#ece9e2" toggled={showMenu} toggle={setShowMenu} />

			<MenuPortal>
				<AnimatePresence mode="wait">
					{showMenu && (
						<motion.nav
							className={styles.menuContainer}
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={containerVariants}
						>
							<div className={styles.burgerMenu}>
								<Hamburger color="#ece9e2" toggled={showMenu} toggle={hideMenu} />
							</div>
							<div className={styles.menuItemsContainer}>
								{menuItems.map((item) => {
									if (item.children) {
										return (
											<div key={item.label}>
												<motion.div
													key={item.href}
													variants={itemVariants}
													onClick={() => setSubmenuOpen((prev) => !prev)}
												>
													<Link
														to={item.href}
														className={`${styles.menuItems} ${submenuOpen ? styles.menuActive : ""}`}
													>
														<span>{item.label}</span>
													</Link>
												</motion.div>
					
												<AnimatePresence>
													{submenuOpen && (
														<motion.div
															className={styles.subMenu}
															initial={{ height: 0, opacity: 0 }}
															animate={{ height: bounds.height, opacity: 1 }}
															exit={{ height: 0, opacity: 0 }}
															transition={{
																duration: 0.4,
																ease: 'easeInOut',
																when: "beforeChildren",
																staggerChildren: 0.05,
															}}
															style={{
																overflow: 'hidden',
																height: bounds.height ? bounds.height : 0,
															}}
														>
															<motion.div
																initial="hidden"
																animate="visible"
																exit="hidden"
																ref={ref}
																variants={{
																	visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
																	hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
																}}
															>
																{item.children.map((subItem) => (
																	<motion.div
																		key={subItem.href}
																		variants={itemVariants}
																		className={styles.subMenuItems}
																	>
																		<Link
																			to={subItem.href}
																			onClick={(e) => handleLinkClick(e, subItem.href)}
																		>
																			{subItem.label}
																		</Link>
																	</motion.div>
																))}
															</motion.div>
														</motion.div>
													)}
												</AnimatePresence>
											</div>
										);
									}

									return (
										<motion.div
											key={item.href}
											variants={itemVariants}
										>
											<Link
												to={item.href}
												className={styles.menuItems}
												onClick={(e) => handleLinkClick(e, item.href)}
											>
												{item.label}
											</Link>
										</motion.div>
									)
								})}
							</div>
						</motion.nav>
					)}
				</AnimatePresence>
			</MenuPortal>
		</>
	)
}

export default Menu;
