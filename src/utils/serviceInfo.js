import React from "react";

import { TickIcon } from "@/components/Icons";

import { routes } from "./routesPath";

export const servicesInfo = {
	"architectural-visualization": {
		"seoContent": {
			"title": "Architectural Visualization | Glocal Studio"
		},
		"id": "architectural-visualization",
		"title":"Architectural Visualization",
		"background": require("../assets/videos/architectural-visualization.mp4"),
		"background_webm": require("../assets/videos/architectural-visualization.webm"),
		"background_poster": require("../assets/videos/architectural-visualization.jpg"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Turning Blueprints Into",
		"secondaryHeading": "Photoreal Experiences",
		"description": "Pixel-perfect renders, quick turnarounds, and a partner you can trust.",
		"show3dRenderSection": true,
		"whatWeDo": {
			"content": "We transform CAD and sketches into photorealistic 3D visuals that help architects, developers, and designers win approvals, attract buyers, and amplify presentations.",
			items: [
				{
					id: "01",
					title: "Perfect for developers pitching projects and realtors marketing properties.",
					heading: "Exterior Rendering",
					content: "Showcase your building's architecture in full context with lifelike detail, light, and landscapintg.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-1.webp"),
					type: "floting",
				}, {
					id: "02",
					title: "Perfect for interior designers and homeowners visualizing upgrades.",
					heading: "Interior Rendering",
					content: "Bring interior concepts to life with photoreal textures, lighting, and decor styling-helping clients see, feel, and believe in the design before it's built.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-2.webp"),
					type: "floting",
				}, {
					id: "03",
					title: "Perfect for presentations that need clarity in layouts and space logic.",
					heading: "Isometric Views",
					content: "Simplify complexity with angled 3D views that highlight layouts, layers, and spatial relationships",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-3.webp"),
					type: "floting",
				}, {
					id: "04",
					title: "Perfect for brochures, property listings, and client-friendly sales material.",
					heading: "Floor Plan Rendering",
					content: "Transform technical blueprints into fully furnished, easy-to-understand 3D layouts that instantly communicate flow, size, and function to clients and buyers.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-4.webp"),
					type: "floting",
				}
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/architectural-visualization/architectural-firms.jpg"),
				"heading": "Architectural Firms",
				"content": "We produce photoreal exterior and interior visuals that communicate design intent with clarity and precision. Perfect for concept presentations, competitions, and client alignment.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Design Accuracy",
					}, {
						"image": <TickIcon />,
						"content": "Realistic Lighting",
					}, {
						"image": <TickIcon />,
						"content": "Material Fidelity",
					}, {
						"image": <TickIcon />,
						"content": "Fast Iterations",
					}, 
				],
				"footer": "Faster client approvals, reduced revisions, persuasive presentations.",
			}, {
				"image": require("../assets/images/service-details/architectural-visualization/interior-studios.jpg"),
				"heading": "Interior Design",
				"content": "We turn interior concepts into atmospheric, material-accurate renders that help clients fully visualize the space before execution. Ideal for mood boards, pitches, and styling validation.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Photoreal Styling",
					}, {
						"image": <TickIcon />,
						"content": "Texture Precision",
					}, {
						"image": <TickIcon />,
						"content": "Mood Lighting",
					}, {
						"image": <TickIcon />,
						"content": "Spatial Clarity",
					}, 
				],
				"footer": "Clarity in design decisions, time saved in approvals, wow-factor presentations.",
			}, {
				"image": require("../assets/images/service-details/architectural-visualization/real-estate-developers.jpg"),
				"heading": "Real Estate Developers",
				"content": "We create high-impact marketing visuals that bring unbuilt properties to life—perfect for brochures, websites, digital campaigns, and pre-launch sales.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Sales Focus",
					}, {
						"image": <TickIcon />,
						"content": "Hero Angles",
					}, {
						"image": <TickIcon />,
						"content": "Marketing Polish",
					}, {
						"image": <TickIcon />,
						"content": "Quick Delivery",
					}, 
				],
				"footer": "Sell faster, attract investors, and reduce marketing costs.",
			}, {
				"image": require("../assets/images/service-details/architectural-visualization/construction-contractors.jpg"),
				"heading": "Construction Contractors",
				"content": "Our visuals simplify design interpretation, helping contractors understand materials, finishes, and spatial layouts clearly for smoother on-site execution.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Build Clarity",
					}, {
						"image": <TickIcon />,
						"content": "Detail Accuracy",
					}, {
						"image": <TickIcon />,
						"content": "Easy Visuals",
					}, {
						"image": <TickIcon />,
						"content": "Coordination Ready",
					}, 
				],
				"footer": "Less confusion on-site, smoother communication with teams, reduced rework.",
			},
		],
		"faqContent": [
			{
				id: 1,
				title: "What files do you need to start an architectural render?",
				content: "We typically require AutoCAD drawings, PDFs, sketches, or 3D models (3ds Max, Revit, SKP, or any other format) you may already have. Reference images and finish details help us achieve higher accuracy.",
			}, {
				id: 2,
				title: "Can you match our design intent and finishes exactly?",
				content: "Yes. With accurate material references or finish images, we can replicate your design intent very closely.",
			}, {
				id: 3,
				title: "How long does an exterior or interior render take?",
				content: "Most architectural renders take between two to four working days depending on complexity and revision cycles. We can accommodate quicker timelines by assigning additional resources without compromising quality.",
			}, {
				id: 4,
				title: "Do you provide multiple versions or alternate material options?",
				content: "Yes. Alternate finish options and additional variations can be created based on project needs.",
			}
		],
  },
	"3d-modeling": {
		"seoContent": {
			"title": "3D MODELLING | Glocal Studio"
		},
		"id": "three-d-modeling",
		"title":"3D MODELLING",
		"background": require("../assets/videos/3d-modelling.mp4"),
		"background_webm": require("../assets/videos/3d-modelling.webm"),
		"background_poster": require("../assets/videos/3d-modelling.jpg"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Turning Ideas Into",
		"secondaryHeading": "TANGIBLE 3D MODELS",
		"description": "hIgh-quality 3D models that form the foundation of stunning renders, prototypes, and architectural visualizations.",
		"show3dRenderSection": false,
		"whatWeDo": {
			"content": "From buildings to interiors, furniture to products-our 3D modeling captures form, scale, and detail with flawless accuracy.",
			items: [
				{
					id: "01",
					title: "Perfect for Architects and developers presenting building designs.",
					heading: "Architectural Modelling",
					content: "We build accurate 3D architectural models that capture scale, structure, and form for visualization and planning.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-1.webp"),
					type: "floting",
				}, {
					id: "02",
					title: "Perfect for Interior designers showcasing layouts and styles.",
					heading: "Interior Design Modelling",
					content: "We craft detailed 3D models of interiors, complete with furniture, textures, and lighting elements for lifelike representation.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-2.webp"),
					type: "floting",
				}, {
					id: "03",
					title: "Perfect for Furniture designers and manufacturers",
					heading: "Furniture Design",
					content: "From bespoke furniture pieces to modular systems, we model every detail for presentation, prototyping, or catalogs.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-3.webp"),
					type: "floting",
				}, {
					id: "04",
					title: "Perfect for Product designers and brands launching new items.",
					heading: "Product Modelling",
					content: "We model products with realistic proportions, textures, and finishes-ideal for testing, marketing, or e-commerce.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-4.webp"),
					type: "floting",
				}
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/3d-modelling/Architects-&-Interior-Designers.jpg"),
				"heading": "Architects & Interior Designers",
				"content": "We build precise 3D models that capture scale, structure, and design intent with accuracy—ideal for concept studies, client presentations, and design iterations.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Accurate Proportions",
					}, {
						"image": <TickIcon />,
						"content": "Clean Topology",
					}, {
						"image": <TickIcon />,
						"content": "Detail Focused",
					}, {
						"image": <TickIcon />,
						"content": "Render Ready",
					}, 
				],
				"footer": "Better design communication, faster approvals, fewer misconceptions.",
			}, {
				"image": require("../assets/images/service-details/3d-modelling/Furniture-&-Product-Manufacturers.jpg"),
				"heading": "Furniture & Product Manufacturers",
				"content": "We model furniture, fixtures, and products with manufacturing-grade precision—ideal for sampling, catalogs, and prototyping.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Prototype Ready",
					}, {
						"image": <TickIcon />,
						"content": "Measurement Accurate",
					}, {
						"image": <TickIcon />,
						"content": "Material Friendly",
					}, {
						"image": <TickIcon />,
						"content": "Vendor Aligned",
					}, 
				],
				"footer": "Better prototypes, faster sampling, and flawless production alignment.",
			}, {
				"image": require("../assets/images/service-details/3d-modelling/Gaming-&-Entertainment-Studios.jpg"),
				"heading": "Gaming & Entertainment Studios",
				"content": "We create optimized 3D assets—characters, props, and environments—designed for seamless integration into game engines and cinematic sequences.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Game Optimized",
					}, {
						"image": <TickIcon />,
						"content": "Low-Poly Ready",
					}, {
						"image": <TickIcon />,
						"content": "Texture Friendly",
					}, {
						"image": <TickIcon />,
						"content": "Engine Compatible",
					}, 
				],
				"footer": "Efficient asset creation, smoother pipelines, and immersive world-building.",
			}, {
				"image": require("../assets/images/service-details/3d-modelling/Advertising-&-Marketing-Agencies.jpg"),
				"heading": "Advertising & Marketing Agencies",
				"content": "We craft campaign-ready 3D assets that elevate brand storytelling and give marketers high-quality visuals across print, digital, and video.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "High Impact",
					}, {
						"image": <TickIcon />,
						"content": "Brand Focused",
					}, {
						"image": <TickIcon />,
						"content": "Stylized Options",
					}, {
						"image": <TickIcon />,
						"content": "Fast Scaling",
					}, 
				],
				"footer": "More impactful ads, quicker creative execution, and standout visuals.",
			},
		],
		"faqContent": [
			{
				id: 1,
				title: "What types of 3D models can you create?",
				content: "We build models for buildings, interiors, furniture, consumer products, characters, props, gaming assets, and virtual environments.",
			}, {
				id: 2,
				title: "Do you create 3D models from sketches or just CAD files?",
				content: "We can model from sketches, PDFs, CAD files, reference images, or product photos.",
			}, {
				id: 3,
				title: "Are your models optimized for both rendering and real-time engines?",
				content: "Yes. We prepare models suitable for animation, rendering, prototyping, or game engines based on your requirements.",
			}, {
				id: 4,
				title: "Do your models go through a technical review?",
				content: "Yes. Each model is internally reviewed by relevant subject-matter experts, including architects, product specialists, and character artists, to ensure clean topology, correct scale, and error-free production readiness.",
			}
		],
	},
	"technical-drawings": {
		"seoContent": {
			"title": "Technical Drawings & Documentation | Glocal Studio"
		},
		"id": "technical-drawings",
		"title":"Technical Drawings & Documentation",
		"background": require("../assets/videos/technical-drawings.mp4"),
		"background_webm": require("../assets/videos/technical-drawings.webm"),
		"background_poster": require("../assets/videos/technical-drawings.jpg"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Drawings That Leave",
		"secondaryHeading": "No Room for Guesswork",
		"description": "Every great project needs precision-we make sure your ideas are translated into build-ready documentation.",
		"show3dRenderSection": false,
		"whatWeDo": {
			"content": "We deliver detailed technical drawings and documentation that bridge design intent and execution, ensuring accuracy at every stage.",
			items: [
				{
					id: "01",
					title: "Perfect for Architects and contractors needing accurate build references.",
					heading: "Architectural Detailing",
					content: "We create precise drawings of plans, elevations, sections, and detailing that guide construction teams with clarity.",
					image: require("../assets/images/service-details/technical-drawings/what-we-do-item-1.jpg"),
					type: "non-floting",
				}, {
					id: "02",
					title: "Perfect for Interior designers and builders streamlining project delivery.",
					heading: "Interior Design Detailing",
					content: "From flooring and ceiling layouts to wall elevations and service drawings, we provide execution-ready interior documentation.",
					image: require("../assets/images/service-details/technical-drawings/what-we-do-item-2.jpg"),
					type: "non-floting",
				}, {
					id: "03",
					title: "Perfect for Furniture makers, manufacturers, and fit-out contractors.",
					heading: "Furniture & Drawings",
					content: "We prepare detailed furniture and joinery drawings with dimensions, finishes, and material specs-ready for vendor execution.",
					image: require("../assets/images/service-details/technical-drawings/what-we-do-item-3.jpg"),
					type: "non-floting",
				},
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/technical-drawings/Architecture-Firms.jpg"),
				"heading": "Architecture Firms",
				"content": "We prepare construction drawings and detailing that ensure design intent is executed accurately on-site.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Dimension Accuracy",
					}, {
						"image": <TickIcon />,
						"content": "Clean Drafting",
					}, {
						"image": <TickIcon />,
						"content": "Build Ready",
					}, {
						"image": <TickIcon />,
						"content": "Code Friendly",
					}, 
				],
				"footer": "Clearer construction, fewer site questions, and smoother execution.",
			}, {
				"image": require("../assets/images/service-details/technical-drawings/Interior-Designers.jpg"),
				"heading": "Interior Designers",
				"content": "We draft furniture layouts, joinery details, and interior documentation that support flawless execution.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Detail Depth",
					}, {
						"image": <TickIcon />,
						"content": "Finish Precision",
					}, {
						"image": <TickIcon />,
						"content": "Designer Sync",
					}, {
						"image": <TickIcon />,
						"content": "Vendor Friendly",
					}, 
				],
				"footer": "Reduced revisions, smoother vendor coordination, and consistent outcomes.",
			}, {
				"image": require("../assets/images/service-details/technical-drawings/Contractors-&-Builders.jpg"),
				"heading": "Contractors & Builders",
				"content": "We provide working drawings that simplify on-site execution and ensure teams stay aligned.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Execution Clarity",
					}, {
						"image": <TickIcon />,
						"content": "Easy Readability",
					}, {
						"image": <TickIcon />,
						"content": "Site Friendly",
					}, {
						"image": <TickIcon />,
						"content": "Organized Layers",
					}, 
				],
				"footer": "Reduced confusion, fewer delays, and streamlined site operations.",
			}, {
				"image": require("../assets/images/service-details/technical-drawings/Engineering-Consultants.jpg"),
				"heading": "Engineering Consultants",
				"content": "We deliver coordination drawings that align architectural, structural, and MEP systems seamlessly.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "System Alignment",
					}, {
						"image": <TickIcon />,
						"content": "Technical Precision",
					}, {
						"image": <TickIcon />,
						"content": "Clear Markups",
					}, {
						"image": <TickIcon />,
						"content": "Coordination Ready",
					}, 
				],
				"footer": "Better interdisciplinary coordination, fewer conflicts, and smoother approvals.",
			},
		],
		"faqContent": [
			{
				id: 1,
				title: "What types of drawings do you prepare?",
				content: "We prepare plans, elevations, sections, interior detailing, joinery drawings, furniture details, and full construction documentation.",
			}, {
				id: 2,
				title: "Do your drawings follow specific client standards?",
				content: "Yes. We align with your templates, layers, dimension styles, and drawing conventions.",
			}, {
				id: 3,
				title: "Can your team handle both small and large drawing sets?",
				content: "Yes. We work on single drawings, large construction packages, and ongoing drafting support for studios.",
			}, {
				id: 4,
				title: "How do you ensure drawings are error free?",
				content: "Every sheet is reviewed internally by a senior architect or detailer before delivery to eliminate dimensional errors, coordination issues, and documentation gaps.",
			}
		],
	},
	"product-visualization": {
		"seoContent": {
			"title": "Product Visualization | Glocal Studio"
		},
		"id": "product-visualization",
		"title":"Product Visualization",
		"background": require("../assets/videos/product-visualization3.mp4"),
		"background_webm": require("../assets/videos/product-visualization3.webm"),
		"background_poster": require("../assets/videos/3d-product-visualization.jpg"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "From Concept to",
		"secondaryHeading": "Photoreal Reality",
		"description": "Our product visualization services make your ideas tangible-perfect for presentations, e-commerce, and marketing.",
		"show3dRenderSection": false,
		"whatWeDo": {
			"content": "From early-stage prototypes to polished furniture renders, we deliver visuals that look as good as the finished product.",
			items: [
				{
					id: "01",
					title: "Perfect for Furniture brands & designers presenting collections or catalogs.",
					heading: "Furniture Rendering",
					content: "We design and render furniture in stunning detail-showcasing finishes, fabrics, and forms with unmatched realism.",
					image: require("../assets/images/service-details/product-visualization/what-we-do-item-1.webp"),
					type: "floting",
				}, {
					id: "02",
					title: "Perfect for Product designers, startups, and brands preparing for launch.",
					heading: "Product Prototypes",
					content: "We build 3D prototypes that let you test, validate, and present your product before manufacturing begins.",
					image: require("../assets/images/service-details/product-visualization/what-we-do-item-2.webp"),
					type: "floting",
				}
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/product-visualization/Furniture-Brands.jpg"),
				"heading": "Furniture Brands",
				"content": "We produce high-quality product renders that elevate catalogues, websites, and marketing campaigns with lifelike detail.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Material Realism",
					}, {
						"image": <TickIcon />,
						"content": "Fabric Detail",
					}, {
						"image": <TickIcon />,
						"content": "Hero Lighting",
					}, {
						"image": <TickIcon />,
						"content": "Catalog Ready",
					}, 
				],
				"footer": "Better marketing visuals, improved conversions, and stronger brand presence.",
			}, {
				"image": require("../assets/images/service-details/product-visualization/Lifestyle-&-Fashion.jpg"),
				"heading": "Lifestyle & Fashion",
				"content": "We visualize shoes, bags, apparel, and accessories with precision—highlighting textures, finishes, and craftsmanship.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Texture Rich",
					}, {
						"image": <TickIcon />,
						"content": "Style Accurate",
					}, {
						"image": <TickIcon />,
						"content": "Color Perfect",
					}, {
						"image": <TickIcon />,
						"content": "Trend Aware",
					}, 
				],
				"footer": "More appealing visuals, higher customer engagement, and elevated brand style.",
			}, {
				"image": require("../assets/images/service-details/product-visualization/Jewelry-&-Luxury-Goods.jpg"),
				"heading": "Jewelry & Luxury Goods",
				"content": "We create cinematic product renders that showcase shine, cuts, and craftsmanship for premium branding.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Macro Detailing",
					}, {
						"image": <TickIcon />,
						"content": "Gem Precision",
					}, {
						"image": <TickIcon />,
						"content": "Premium Polish",
					}, {
						"image": <TickIcon />,
						"content": "Luxury Focus",
					}, 
				],
				"footer": "Increased desire, premium perception, and high luxury appeal.",
			}, {
				"image": require("../assets/images/service-details/product-visualization/Consumer-Electronics.jpg"),
				"heading": "Consumer Electronics",
				"content": "We deliver high-impact visuals for gadgets, devices, and tech launches with immaculate detailing and lighting.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Tech Precision",
					}, {
						"image": <TickIcon />,
						"content": "Sleek Lighting",
					}, {
						"image": <TickIcon />,
						"content": "Launch Ready",
					}, {
						"image": <TickIcon />,
						"content": "E-Com Optimized",
					}, 
				],
				"footer": "Better product launches, stronger storytelling, and standout e-commerce imagery.",
			},
		],
		"faqContent": [
			{
				id: 1,
				title: "What types of products can you visualize?",
				content: "Furniture, lighting, decor, consumer electronics, lifestyle products, fashion items, industrial tools, and prototypes.",
			}, {
				id: 2,
				title: "Can you visualize products without a physical sample?",
				content: "Yes. We can work from sketches, CAD files, product photos, or technical specifications.",
			}, {
				id: 3,
				title: "Can you create multiple color or material options?",
				content: "Yes. Material variations are simple to produce once the base model and scene are ready.",
			}, {
				id: 4,
				title: "Are the product renders suitable for marketing and ecommerce?",
				content: "Yes. We deliver clean, high-resolution, and brand-aligned product renders suitable for websites, marketplaces, and print.",
			}
		],
	},
	"3d-animation-and-experiences": {
		"seoContent": {
			"title": "3D Animation & Interactive Experiences | Glocal Studio"
		},
		"id": "three-d-animation-and-experiences",
		"title":"3D Animation & Interactive Experiences",
		"background": require("../assets/videos/3d-animation-and-experiences.mp4"),
		"background_webm": require("../assets/videos/3d-animation-and-experiences.webm"),
		"background_poster": require("../assets/videos/3d-animations-and-experiences.jpg"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Interact. Explore.",
		"secondaryHeading": "Experience.",
		"description": "Our 3D animations and interactive tools help clients visualize, explore, and connect with spaces like never before.",
		"show3dRenderSection": false,
		"whatWeDo": {
			"content": "We transform static designs into dynamic, cinematic experiences through animations and interactive presentations.",
			items: [
				{
					id: "01",
					title: "Perfect for Developers and Architects presenting projects to clients, investors, and buyers.",
					heading: "Architectural Walkthroughs",
					content: "We create smooth, cinematic walkthroughs that let clients experience scale, mood, and flow before construction begins.",
					image: require("../assets/images/service-details/3d-animation-and-experiences/what-we-do-item-1.jpg"),
					type: "non-floting",
				}, {
					id: "02",
					title: "Perfect for Interior designers and homeowners making faster, clearer design decisions.",
					heading: "Interactive Presentations",
					content: "We design interactive interior presentations where clients can explore layouts, finishes, and styling in real-time.",
					image: require("../assets/images/service-details/3d-animation-and-experiences/what-we-do-item-2.jpg"),
					type: "non-floting",
				}
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Architecture-&-Real-Estate.jpg"),
				"heading": "Architecture & Real Estate",
				"content": "We produce cinematic walkthroughs and flythroughs that bring unbuilt spaces to life—boosting client understanding and pre-sales momentum.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Cinematic Motion",
					}, {
						"image": <TickIcon />,
						"content": "Realistic Atmosphere",
					}, {
						"image": <TickIcon />,
						"content": "Story-Driven",
					}, {
						"image": <TickIcon />,
						"content": "Sales Focused",
					}, 
				],
				"footer": "More persuasive presentations, stronger emotional impact, faster project buy-in.",
			}, {
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Hospitality-&-Retail.jpg"),
				"heading": "Hospitality & Retail",
				"content": "We create immersive animation and interactive previews that showcase experience-driven spaces like hotels, resorts, and retail environments.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Experience First",
					}, {
						"image": <TickIcon />,
						"content": "Mood Precision",
					}, {
						"image": <TickIcon />,
						"content": "Customer-Centric",
					}, {
						"image": <TickIcon />,
						"content": "High Realism",
					}, 
				],
				"footer": "Better guest engagement, stronger marketing, and richer brand storytelling.",
			}, {
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Product-Companies.jpg"),
				"heading": "Product Companies",
				"content": "We build product animations and configurators that showcase features, mechanisms, and design details in the most engaging way.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Feature Focused",
					}, {
						"image": <TickIcon />,
						"content": "High Detailing",
					}, {
						"image": <TickIcon />,
						"content": "Interactive Options",
					}, {
						"image": <TickIcon />,
						"content": "Launch Ready",
					}, 
				],
				"footer": "Clearer product communication, increased conversions, elevated brand perception.",
			}, {
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Automotive-&-Industrial.jpg"),
				"heading": "Automotive & Industrial",
				"content": "We create technical animations and demos for vehicles, machinery, and industrial systems—highlighting function, movement, and engineering clarity.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Technical Accuracy",
					}, {
						"image": <TickIcon />,
						"content": "Mechanism Clarity",
					}, {
						"image": <TickIcon />,
						"content": "Smooth Motion",
					}, {
						"image": <TickIcon />,
						"content": "Industrial Precision",
					}, 
				],
				"footer": "Improved training, better demos, and enhanced investor/partner understanding.",
			},
		],
		"faqContent": [
			{
				id: 1,
				title: "What types of animations do you create?",
				content: "Architectural walkthroughs, interior flythroughs, product animations, character shots, brand videos, and interactive visualization sequences.",
			}, {
				id: 2,
				title: "How long does a typical animation take to produce?",
				content: "Timelines vary by length and complexity, but a standard one-minute flythrough usually takes one to two weeks.",
			}, {
				id: 3,
				title: "Can you help define the movement path or storyboard?",
				content: "Yes. Our team can create the camera path, storyboard, or movement logic for you.",
			}, {
				id: 4,
				title: "Do you provide sound, text, or branding inside the video?",
				content: "Yes. We include sound, music, labels, highlights, and branding elements if required.",
			}
		],
	},
	"360-degree-and-virtual-tours": {
		"seoContent": {
			"title": "360° & Virtual Tours | Glocal Studio"
		},
		"id": "three-sixty-degree-and-virtual-tours",
		"title":"360° & Virtual Tours",
		"background": require("../assets/videos/360-degree-and-virtual-tours.mp4"),
		"background_webm": require("../assets/videos/360-degree-and-virtual-tours.webm"),
		"background_poster": require("../assets/videos/360-virtual.jpg"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Immersive Tours",
		"secondaryHeading": "That Sell Faster.",
		"description": "Our VR-enabled tours and interactive panoramas bring projects to life, helping clients experience properties as if they were there in person.",
		"show3dRenderSection": false,
		"whatWeDo": {
			"content": "We create immersive 360° panoramas and virtual tours that allow clients to explore spaces in vivid detail-remotely and realistically.",
			items: [
				{
					id: "01",
					title: "Perfect for Architects, interior designers, and marketers showcasing spaces online.",
					heading: "360° Panoramas",
					content: "High-resolution panoramic visuals that capture entire spaces in a single immersive frame.",
					image: require("../assets/images/service-details/360-degree-and-virtual-tours/what-we-do-item-1.jpg"),
					type: "non-floting",
				}, {
					id: "02",
					title: "Perfect for Real estate developers, brokers, and property portals.",
					heading: "Real Estate Virtual Tours",
					content: "Fully interactive tours that let buyers explore properties virtually, driving faster decisions and stronger sales.",
					image: require("../assets/images/service-details/360-degree-and-virtual-tours/what-we-do-item-2.jpg"),
					type: "non-floting",
				}
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Real-Estate.jpg"),
				"heading": "Real Estate",
				"content": "We create immersive 360° tours that allow buyers to explore homes, apartments, and communities remotely with full clarity.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "High Resolution",
					}, {
						"image": <TickIcon />,
						"content": "Smooth Navigation",
					}, {
						"image": <TickIcon />,
						"content": "VR Compatible",
					}, {
						"image": <TickIcon />,
						"content": "Sales Ready",
					}, 
				],
				"footer": "Higher inquiries, faster decisions, and stronger pre-sales performance.",
			}, {
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Hospitality.jpg"),
				"heading": "Hospitality",
				"content": "We produce virtual experiences for hotels, resorts, and restaurants that help guests understand ambience before booking.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Mood Realism",
					}, {
						"image": <TickIcon />,
						"content": "Interactive Flow",
					}, {
						"image": <TickIcon />,
						"content": "Brand Aligned",
					}, {
						"image": <TickIcon />,
						"content": "Booking Focused",
					}, 
				],
				"footer": "Better guest engagement, increased trust, and improved booking rates.",
			}, {
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Corporate-Workspaces.jpg"),
				"heading": "Corporate Workspaces",
				"content": "We build interactive office tours that help clients visualize workspace planning, design intent, and layout flow.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Layout Clarity",
					}, {
						"image": <TickIcon />,
						"content": "Navigation Ease",
					}, {
						"image": <TickIcon />,
						"content": "Design Sync",
					}, {
						"image": <TickIcon />,
						"content": "Team Friendly",
					}, 
				],
				"footer": "Clearer communication, quicker decisions, and streamlined design approvals.",
			}, {
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Retail.jpg"),
				"heading": "Retail",
				"content": "We create virtual store walkthroughs that help brands showcase retail concepts, merchandising, and customer journeys.",
				"keyServices": [
					{
						"image": <TickIcon />,
						"content": "Brand Precision",
					}, {
						"image": <TickIcon />,
						"content": "Store Mapping",
					}, {
						"image": <TickIcon />,
						"content": "Product Highlighting",
					}, {
						"image": <TickIcon />,
						"content": "E-Com Friendly",
					}, 
				],
				"footer": "Better brand pitches, stronger concept validation, and richer customer engagement.",
			},
		],
		"faqContent": [
			{
				id: 1,
				title: "What is included in a 360 virtual tour?",
				content: "Interactive panoramas, navigation points, hotspots, and optimized rendering for web or VR headsets.",
			}, {
				id: 2,
				title: "What do you need from us to begin?",
				content: "AutoCAD drawings, 3D models if available, and references for finishes or mood boards.",
			}, {
				id: 3,
				title: "Can tours be integrated into websites or marketing platforms?",
				content: "Yes. We deliver tours in formats suitable for web embedding, presentations, or VR interfaces.",
			}, {
				id: 4,
				title: "Do you create both residential and commercial tours?",
				content: "Yes. We support real estate, hospitality, retail, healthcare, and other sectors.",
			}
		],
	},
};

export const servicesArray = [
	{
		id: "01",
		title: routes["architectural-visualization"].label,
		link: routes["architectural-visualization"].href,
		icon: routes["architectural-visualization"].icon,
		menuContent: "Bring architectural ideas to life with stunning, photoreal renders-exteriors, interiors, isometrics, floor plans, and walkthroughs that inspire confidence and sell."
	},  {
		id: "02",
		title: routes["3d-modeling"].label,
		link: routes["3d-modeling"].href,
		icon: routes["3d-modeling"].icon,
		menuContent: "We craft accurate 3D models for architecture, interiors, furniture, and products-detailed, scalable, and ready for rendering or prototyping."
	}, {
		id: "03",
		title: routes["technical-drawings"].label,
		link: routes["technical-drawings"].href,
		icon: routes["technical-drawings"].icon,
		menuContent: "Precise working drawings, joinery details, and documentation that bridge design intent and execution-streamlining site work and vendor coordination."
	}, {
		id: "04",
		title: routes["product-visualization"].label,
		link: routes["product-visualization"].href,
		icon: routes["product-visualization"].icon,
		menuContent: "From furniture renders to prototypes, we showcase your products with lifelike detail-perfect for marketing, e-commerce, and investor presentations."
	}, {
		id: "05",
		title: routes["3d-animation-and-experiences"].label,
		link: routes["3d-animation-and-experiences"].href,
		icon: routes["3d-animation-and-experiences"].icon,
		menuContent: "Transform static visuals into immersive experiences with architectural flythroughs, interior presentations, and interactive storytelling."
	},  {
		id: "06",
		title: routes["360-degree-and-virtual-tours"].label,
		link: routes["360-degree-and-virtual-tours"].href,
		icon: routes["360-degree-and-virtual-tours"].icon,
		menuContent: "Give clients the power to explore spaces virtually through 360° panoramas and interactive tours-ideal for real estate and hospitality marketing."
	}
];
