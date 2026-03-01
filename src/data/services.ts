export interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    slug: string;
    isFeatured: boolean;
    longDescription?: string;
}

export const photographyServices: Service[] = [
    {
        id: 1,
        title: "Wedding Photography",
        description: "Capture your special day with stunning imagery. From candid moments to posed portraits, we document every emotion and celebration of your wedding journey.",
        longDescription: "Your wedding day is one of the most important moments of your life, and we are here to capture every detail with artistry and care. From the intimate exchange of vows to the grand celebration afterward, our team documents every emotion, every laugh, and every tear. We blend photojournalistic storytelling with classic portraiture to deliver a complete visual narrative of your wedding. Every image is crafted to be timeless, beautiful, and deeply personal.",
        image: "/ourServices/Wedding_Photography.jfif",
        slug: "wedding-photography",
        isFeatured: true,
    },
    {
        id: 2,
        title: "Portrait Photography",
        description: "Professional portraits that capture your personality and essence. Perfect for family photos, individual portraits, and professional headshots.",
        longDescription: "A great portrait goes beyond a simple photo — it tells your story. Whether you need a striking professional headshot, a warm family portrait, or an artistic individual session, we tailor every shoot to reflect your unique personality. We work in both studio and natural light settings, ensuring you feel comfortable and confident in front of the lens. The result is a collection of images that truly represent who you are.",
        image: "/ourServices/Portrait_Photography.jfif",
        slug: "portrait-photography",
        isFeatured: true,
    },
    {
        id: 3,
        title: "Pre-Wedding Shoots",
        description: "Romantic and creative pre-wedding photography sessions at scenic locations. Tell your love story through beautiful images.",
        longDescription: "A pre-wedding shoot is the perfect way to celebrate your love story before the big day. We scout beautiful locations that resonate with you as a couple — from golden fields and mountain vistas to urban streets and cozy interiors. These sessions are relaxed and fun, giving you a chance to get comfortable in front of the camera while we craft stunning, artistic imagery. The photos make perfect additions to wedding invitations, albums, and décor.",
        image: "/ourServices/Pre-Wedding_Shoots.jfif",
        slug: "pre-wedding-shoots",
        isFeatured: true,
    },
    {
        id: 4,
        title: "Event Photography",
        description: "Comprehensive coverage of corporate events, birthday parties, anniversaries, and celebrations. We capture every memorable moment.",
        longDescription: "From corporate conferences and product launches to birthday parties, anniversaries, and cultural celebrations, we provide comprehensive event photography coverage. Our photographers blend into the background while expertly capturing candid interactions, key presentations, and celebratory moments. You get a complete, vivid visual record of your event that can be used for marketing, social media, or keeping memories alive.",
        image: "/ourServices/Event_Photography.jfif",
        slug: "event-photography",
        isFeatured: true,
    },
    {
        id: 5,
        title: "Product Photography",
        description: "High-quality product images for e-commerce, catalogs, and advertising. Make your products stand out with professional photography.",
        longDescription: "In a competitive market, exceptional product photography is a crucial differentiator. We create clean, high-resolution product images for e-commerce platforms, print catalogs, and advertising campaigns. Whether it's lifestyle shots that show your product in context, or crisp white-background studio shots that highlight every detail, our photography is designed to convert browsers into buyers and tell your brand's story visually.",
        image: "/ourServices/Product_Photography.jfif",
        slug: "product-photography",
        isFeatured: true,
    },
    {
        id: 6,
        title: "Commercial Photography",
        description: "Professional photography for businesses, real estate, and commercial projects. Elevate your brand with stunning visuals.",
        longDescription: "Commercial photography is about communicating your brand's identity and values through powerful imagery. We work with businesses of all sizes — from startups to established corporations — to create bespoke visual content for websites, advertising campaigns, annual reports, and more. Our commercial services also include real estate photography, architectural photography, and corporate team photography, all delivered with a premium, high-end finish.",
        image: "/ourServices/Commercial_Photography.jfif",
        slug: "commercial-photography",
        isFeatured: true,
    },
]
