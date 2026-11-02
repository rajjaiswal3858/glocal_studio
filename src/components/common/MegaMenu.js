import React from "react";
import {
	Container,
	Grid2 as Grid
} from '@mui/material';
import { Link } from "react-router-dom";

import { StarGradiantIcon } from "@/components/Icons";

import { servicesArray } from "@/utils/serviceInfo";

import * as styles from "./MegaMenu.module.scss";

function MegaMenu({ onClose }) {
	return (
		<Container className={styles.container} onMouseLeave={onClose}>
			<Grid container size={12} spacing={4}>
				{
					servicesArray.map((service) => (
						<Grid
							container
							size={4}
							key={service.id}
							alignItems="flex-start"
							className={styles.menuItem}
						>
							<Link to={service.link} className={styles.link}>					
								<div className={styles.starIcon}>
									<StarGradiantIcon />
								</div>
								<div className={styles.menuInfo}>
									<div className={styles.menuTitle}>{service.title}</div>
									<div className={styles.menuDescription}>
										{service.menuContent}
									</div>
								</div>
							</Link>
						</Grid>
					))
				}
			</Grid>
		</Container>
	)
}

export default MegaMenu;
