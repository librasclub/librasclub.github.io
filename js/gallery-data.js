// =================================================================
// IMAGE DATABASE FOR THE GALLERY
// =================================================================
//
// Instructions:
// To add a new image, copy one of the blocks below and paste it
// into the correct category section.
//
// Each image needs:
// - id: A unique name (no spaces or special characters).
// - src: The path to the image file (e.g., 'assets/images/your-image.jpg').
// - alt: A short description of the image for accessibility.
// - category: 'generic', 'gothic', or 'heroes'.
//

const galleryImages = [

    // -------------------------------------------------------------
    // GENERIC PHOTOS (Lobby, Bar, General Moments)
    // -------------------------------------------------------------
    { id: 'generic1', src: 'assets/images/gallerygeneric/generic1.png', alt: 'Generic Club Image 1', category: 'generic' },
    { id: 'generic2', src: 'assets/images/gallerygeneric/generic2.png', alt: 'Generic Club Image 2', category: 'generic' },
    { id: 'generic3', src: 'assets/images/gallerygeneric/generic3.png', alt: 'Generic Club Image 3', category: 'generic' },
    { id: 'generic4', src: 'assets/images/gallerygeneric/generic4.png', alt: 'Generic Club Image 4', category: 'generic' },
    { id: 'generic5', src: 'assets/images/gallerygeneric/generic5.png', alt: 'Generic Club Image 5', category: 'generic' },
    { id: 'generic6', src: 'assets/images/gallerygeneric/generic6.png', alt: 'Generic Club Image 6', category: 'generic' },
    { id: 'generic7', src: 'assets/images/gallerygeneric/generic7.png', alt: 'Generic Club Image 7', category: 'generic' },
    { id: 'generic8', src: 'assets/images/gallerygeneric/generic8.png', alt: 'Generic Club Image 8', category: 'generic' },
    { id: 'generic9', src: 'assets/images/gallerygeneric/generic9.png', alt: 'Generic Club Image 9', category: 'generic' },
    { id: 'generic10', src: 'assets/images/gallerygeneric/generic10.png', alt: 'Generic Club Image 10', category: 'generic' },
    { id: 'generic11', src: 'assets/images/gallerygeneric/generic11.png', alt: 'Generic Club Image 11', category: 'generic' },
    { id: 'generic12', src: 'assets/images/gallerygeneric/generic12.png', alt: 'Generic Club Image 12', category: 'generic' },
    { id: 'generic13', src: 'assets/images/gallerygeneric/generic13.png', alt: 'Generic Club Image 13', category: 'generic' },
    { id: 'generic14', src: 'assets/images/gallerygeneric/generic14.png', alt: 'Generic Club Image 14', category: 'generic' },
    { id: 'generic15', src: 'assets/images/gallerygeneric/generic15.png', alt: 'Generic Club Image 15', category: 'generic' },
    { id: 'generic16', src: 'assets/images/gallerygeneric/generic16.png', alt: 'Generic Club Image 16', category: 'generic' },
    { id: 'generic17', src: 'assets/images/gallerygeneric/generic17.png', alt: 'Generic Club Image 17', category: 'generic' },
    { id: 'generic18', src: 'assets/images/gallerygeneric/generic18.png', alt: 'Generic Club Image 18', category: 'generic' },
    { id: 'generic19', src: 'assets/images/gallerygeneric/generic19.png', alt: 'Generic Club Image 19', category: 'generic' },
    { id: 'generic20', src: 'assets/images/gallerygeneric/generic20.png', alt: 'Generic Club Image 20', category: 'generic' },
    { id: 'generic21', src: 'assets/images/gallerygeneric/generic21.png', alt: 'Generic Club Image 21', category: 'generic' },
    { id: 'generic22', src: 'assets/images/gallerygeneric/generic22.png', alt: 'Generic Club Image 22', category: 'generic' },
    { id: 'generic23', src: 'assets/images/gallerygeneric/generic23.png', alt: 'Generic Club Image 23', category: 'generic' },
    { id: 'generic24', src: 'assets/images/gallerygeneric/generic24.png', alt: 'Generic Club Image 24', category: 'generic' },
    { id: 'generic25', src: 'assets/images/gallerygeneric/generic25.png', alt: 'Generic Club Image 25', category: 'generic' },
    { id: 'generic26', src: 'assets/images/gallerygeneric/generic26.png', alt: 'Generic Club Image 26', category: 'generic' },
    { id: 'generic27', src: 'assets/images/gallerygeneric/generic27.png', alt: 'Generic Club Image 27', category: 'generic' },


    // -------------------------------------------------------------
    // GOTHIC EVENT PHOTOS
    // -------------------------------------------------------------
    { id: 'gothic1', src: 'assets/images/gallerygothic/gothic1.png', alt: 'Gothic Event Image 1', category: 'gothic' },
    { id: 'gothic2', src: 'assets/images/gallerygothic/gothic2.png', alt: 'Gothic Event Image 2', category: 'gothic' },
    { id: 'gothic3', src: 'assets/images/gallerygothic/gothic3.png', alt: 'Gothic Event Image 3', category: 'gothic' },
    { id: 'gothic4', src: 'assets/images/gallerygothic/gothic4.png', alt: 'Gothic Event Image 4', category: 'gothic' },
    { id: 'gothic5', src: 'assets/images/gallerygothic/gothic5.png', alt: 'Gothic Event Image 5', category: 'gothic' },
    { id: 'gothic6', src: 'assets/images/gallerygothic/gothic6.png', alt: 'Gothic Event Image 6', category: 'gothic' },
    { id: 'gothic7', src: 'assets/images/gallerygothic/gothic7.png', alt: 'Gothic Event Image 7', category: 'gothic' },
    { id: 'gothic8', src: 'assets/images/gallerygothic/gothic8.png', alt: 'Gothic Event Image 8', category: 'gothic' },
    { id: 'gothic9', src: 'assets/images/gallerygothic/gothic9.png', alt: 'Gothic Event Image 9', category: 'gothic' },
    { id: 'gothic10', src: 'assets/images/gallerygothic/gothic10.png', alt: 'Gothic Event Image 10', category: 'gothic' },
    { id: 'gothic11', src: 'assets/images/gallerygothic/gothic11.png', alt: 'Gothic Event Image 11', category: 'gothic' },


    // -------------------------------------------------------------
    // HEROES VS VILLAINS EVENT PHOTOS
    // -------------------------------------------------------------
    { id: 'hxv1', src: 'assets/images/galleryhxv/hxv1.png', alt: 'Heroes vs Villains Event Image 1', category: 'heroes' },
    { id: 'hxv2', src: 'assets/images/galleryhxv/hxv2.png', alt: 'Heroes vs Villains Event Image 2', category: 'heroes' },
    { id: 'hxv3', src: 'assets/images/galleryhxv/hxv3.png', alt: 'Heroes vs Villains Event Image 3', category: 'heroes' },
    { id: 'hxv4', src: 'assets/images/galleryhxv/hxv4.png', alt: 'Heroes vs Villains Event Image 4', category: 'heroes' },
    { id: 'hxv5', src: 'assets/images/galleryhxv/hxv5.png', alt: 'Heroes vs Villains Event Image 5', category: 'heroes' },
    { id: 'hxv6', src: 'assets/images/galleryhxv/hxv6.png', alt: 'Heroes vs Villains Event Image 6', category: 'heroes' },
    { id: 'hxv7', src: 'assets/images/galleryhxv/hxv7.png', alt: 'Heroes vs Villains Event Image 7', category: 'heroes' },
    { id: 'hxv8', src: 'assets/images/galleryhxv/hxv8.png', alt: 'Heroes vs Villains Event Image 8', category: 'heroes' },
    { id: 'hxv9', src: 'assets/images/galleryhxv/hxv9.png', alt: 'Heroes vs Villains Event Image 9', category: 'heroes' },
    { id: 'hxv10', src: 'assets/images/galleryhxv/hxv10.png', alt: 'Heroes vs Villains Event Image 10', category: 'heroes' },
    { id: 'hxv11', src: 'assets/images/galleryhxv/hxv11.png', alt: 'Heroes vs Villains Event Image 11', category: 'heroes' },
    // <-- Add more 'heroes' event photos here

];