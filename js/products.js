const products = [
    {
        id: 0,
        name: "Oil Pastels",
        price: 29.99,
        instock: 10,
        subtitle:
            "Tired of using crayons? Want to make artwork that is of more professional quality? Try our oil pastels.",
        description:
            "<li> Brilliant colored pastels apply smoothly and blend easily for subtle shades, tints and color mixtures</li>\n" +
            "                                        <li> Easy to use for artists of all ages</li>\n" +
            "                                        <li> Acid-free pastels are ideal for use on paper, board or canvas</li>\n" +
            "                                        <li> More vivid than chalk pastels and more resistant to the effects of humidity for longer-lasting drawings</li>\n" +
            "                                        <li> ACMI Certified</li>",
        unitCount1: '12-piece',
        unitCount2: '24-piece',
        category2: 'quality',
        category2_val1: 'student-grade',
        category2_val2: 'artist-grade',
        imgSrc: "images/pastels.jpg",
    },
    {
        id: 1,
        name: "Acrylic",
        price: 24.99,
        instock: 20,
        subtitle:
            "Use on a variety of surfaces including wood, styrofoam, plaster, terracotta, and more!",
        description:
            "<li> This versatile acrylic paint set includes 18 - 2 oz bottles of colorful craft paint.</li>\n" +
            "                                    <li> Easy to use for artists of all ages</li>\n" +
            "                                    <li> Each of these bold and bright colors dries to a brilliant matte finish - perfect for all your arts and crafts</li>\n" +
            "                                    <li> Non-toxic and water-based formula, easy cleanup</li>\n" +
            "                                    <li> ACMI Certified</li>",
        unitCount1: '12-piece',
        unitCount2: '24-piece',
        category2: 'quality',
        category2_val1: 'student-grade',
        category2_val2: 'artist-grade',
        imgSrc: "images/acrylic-light.jpg",
    },
    {
        id: 2,
        name: "Watercolor",
        price: 17.99,
        instock: 25,
        subtitle:
            "Only needs a bit of water for some magic!",
        description:
            "<li> Great color selection, high pigment quality, mixes well</li>\n" +
            "                                    <li> Easy to use for artists of all ages</li>\n" +
            "                                    <li> Easy to dissolve and blend</li>\n" +
            "                                    <li> Non-toxic certified</li>\n",
        unitCount1: '12-piece',
        unitCount2: '24-piece',
        category2: 'quality',
        category2_val1: 'student-grade',
        category2_val2: 'artist-grade',
        imgSrc: "images/watercolor.jpg",
    },
    {
        id: 3,
        name: "Charcoal Utensils",
        price: 8.99,
        instock: 11,
        subtitle:
            "Feeling a bit classy? Play with light and shadow with our charcoal set.",
        description:
            "<li> A combination of natural charcoal particles with the finest clays </li>\n" +
        "                                    <li> Easy to use for artists of all ages</li>\n" +
        "                                    <li> 100% non-toxic and certified for safe use, conforms to MSDS</li>\n",
        unitCount1: '4 count',
        unitCount2: '6 count',
        category2: 'type',
        category2_val1: 'pencils',
        category2_val2: 'charcoal sticks',
        imgSrc: "images/charcoal-utensils.jpg",
    },
    {
        id: 4,
        name: "Colored Pencils",
        price: 10.99,
        instock: 35,
        subtitle:
            "Find graphite a bit too boring? Try our colored pencils!",
        description:
            "<li> Contains artist-quality soft lead for rich pigment and smooth application </li>\n" +
            "                                    <li> Easy to use for artists of all ages</li>\n" +
            "                                    <li> Includes storage case with a built-in tray to keep pencils organized and protected </li>\n" +
            "                                    <li> Conforms to ASTM D4236 </li>\n",
        unitCount1: '6-fl oz',
        unitCount2: '12-fl oz',
        category2: 'quality',
        category2_val1: 'student-grade',
        category2_val2: 'artist-grade',
        imgSrc: "images/colorpencils.jpg",
    },
    {
        id: 5,
        name: "Gouache",
        price: 10.99,
        instock: 25,
        subtitle:
            "Daring to get a bit messier? Try our gouache.",
        description:
            "<li> Made from finely ground pigments selected for high saturation and lightfastness</li>\n" +
            "                                    <li> Finely ground pigments</li>\n" +
            "                                    <li> Highly saturated and lightfast</li>\n" +
            "                                    <li> No whitening agents included</li>\n",
        unitCount1: '48 colors',
        unitCount2: '24 colors',
        category2: 'medium',
        category2_val1: 'acrylic-based',
        category2_val2: 'oil-based',
        imgSrc: "images/gouache-paint.jpg",
    },
    {
        id: 6,
        name: "Tempera",
        price: 10.99,
        instock: 25,
        subtitle:
            "Not looking to make messes? There's no more need for messy brushes and paint trays with our tempera.",
        description:
            "<li> Tempera paint with bright colors that dry to a matte finish.</li>\n" +
            "                                    <li> Features pressure sensitive valves to ensure paint won't spray out when squeezed</li>\n" +
            "                                    <li> Easy to dissolve and blend, washable and quick-dryable</li>\n" +
            "                                    <li> 100% non-toxic and certified for safe use</li>\n",
        unitCount1: '12 colors',
        unitCount2: '6 colors',
        category2: 'volume',
        category2_val1: '2 oz',
        category2_val2: '6 oz',
        imgSrc: "images/tempera-paint.jpg",
    },
    {
        id: 7,
        name: "Face Palettes",
        price: 53.99,
        instock: 8,
        subtitle:
            "Want to make <i>yourself</i> into a piece of art? We may have just the palette for you.",
        description:
            "<li> 10-20 different shades of color per palette</li>\n" +
            "                                    <li> Variety of vibrant colors to highlight the face</li>\n" +
            "                                    <li> Non-irritable ingredients for sensitive skin</li>\n" +
            "                                    <li> 100% non-toxic and certified for safe use, conforms to MSDS</li>\n",
        unitCount1: '6-fl oz',
        unitCount2: '12-fl oz',
        category2: 'color',
        category2_val1: 'cool super palette',
        category2_val2: 'tropical hues',
        imgSrc: "images/facial-palette.jpg",
    },
    {
        id: 8,
        name: "Cosmetic Brushes",
        price: 7.39,
        instock: 5,
        subtitle:
            "Need new brushes to go along with your makeup? Look no further.",
        description:
            "<li>Contains fine multi-diameter filaments secured in ferrules and attached to FSC-certified birch handles</li>\n" +
            "                                    <li> Angled precision contour</li>\n" +
            "                                    <li> Ideal for blending colors along the eye with precision</li>\n" +
            "                                    <li> Fine tip ideal for closely and precisely lining eyes with any gel or liquid makeup</li>\n",
        unitCount1: '6-fl oz',
        unitCount2: '12-fl oz',
        category2: 'style',
        category2_val1: 'short-handle',
        category2_val2: 'long-handle',
        imgSrc: "images/cosmetic-brushes.jpg",
    },
    {
        id: 9,
        name: "Blank Canvas",
        price: 13.39,
        instock: 8,
        subtitle:
            "A fresh start for art.",
        description:
            "<li>Already primed with 8 oz. of acid-free acrylic gesso. No prep necessary</li>\n" +
            "                                    <li> Suitable for variety of artist media from oil paint and watercolors to acrylic painting, pastels, tempera, and gouache</li>\n" +
            "                                    <li> 100% cotton canvas panels has a medium grain and holds the paint without absorbing it</li>\n",
        unitCount1: 'single',
        unitCount2: '2-count',
        category2: 'size',
        category2_val1: '15 x 15 in',
        category2_val2: '48 x 48 in',
        imgSrc: "images/art-canvas.jpg",
    },
];