import React from "react";

import {
	AdministrativeTask,
	CreativeDesign,
	CustomerSupport,
	DigitalMarketing,
	SoftwareAppDevelopment,
	WebDevelopment,
} from "@/components/Icons";

export const routes = {
	home: {
		label: 'Home',
		href: "/"
	},
	about: {
		label: 'About Us',
		href: "/about-us"
	},
	services: {
		label: 'Services',
		href: "/services"
	},
	portfolio: {
		label: 'Portfolio',
		href: "/portfolio"
	},
	"contact-us": {
		label: 'Contact Us',
		href: "/contact-us"
	},
	"faq": {
		label: "FAQs",
		href: "/faq"
	},
	"architectural-visualization": {
		label: 'Architectural Visualization',
		href: '/services/architectural-visualization',
		icon: <AdministrativeTask />,
	},
	"3d-modeling": {
		label: '3D Modeling',
		href: '/services/3d-modeling',
		icon: <DigitalMarketing />,
	},
	"technical-drawings": {
		label: 'Technical Drawings',
		href: '/services/technical-drawings',
		icon: <CustomerSupport />,
	},
	"product-visualization": {
		label: 'Product Visualization',
		href: '/services/product-visualization',
		icon: <WebDevelopment />,
	},
	"3d-animation-and-experiences": {
		label: '3D Animation & Experiences',
		href: '/services/3d-animation-and-experiences',
		icon: <CreativeDesign />,
	},
	"360-degree-and-virtual-tours": {
		label: '360° & Virtual Tours',
		href: '/services/360-degree-and-virtual-tours',
		icon: <SoftwareAppDevelopment />,
	},
	"terms-of-service": {
		label: 'Terms of Service',
		href: '/terms-of-service'
	},
	"privacy-policy": {
		label: 'Privacy Policy',
		href: '/privacy-policy'
	},
	"cookie-settings": {
		label: 'Cookie Settings',
		href: '/cookie-settings'
	},
};
