// js/team-data.js
// Banco de dados central para todos os membros da equipa.

const teamMembers = [
    // ===================================
    // OWNERS & MANAGEMENT
    // ===================================
    {
        id: 'laira',
        nameKey: 'laira_name',
        roleKey: 'laira_role',
        bioKey: 'laira_bio',
        drinkKey: 'laira_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/LairaPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/laira-photo.jpg'
    },
    {
        id: 'hector',
        nameKey: 'hector_name',
        roleKey: 'hector_role',
        bioKey: 'hector_bio',
        drinkKey: 'hector_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/HectorPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/hector-photo.jpg'
    },
    {
        id: 'icoraz',
        nameKey: 'icoraz_name',
        roleKey: 'icoraz_role',
        bioKey: 'icoraz_bio',
        drinkKey: 'icoraz_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/IcorazPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/icoraz-photo.jpg'
    },
    {
        id: 'amneulix',
        nameKey: 'amneulix_name',
        roleKey: 'amneulix_role',
        bioKey: 'amneulix_bio',
        drinkKey: 'amneulix_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/AmneulixPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/amneulix-photo.jpg'
    },

    // ===================================
    // CREW MEMBERS
    // ===================================
    {
        id: 'alairen',
        nameKey: 'alairen_name',
        roleKey: 'alairen_role',
        bioKey: 'alairen_bio',
        drinkKey: 'alairen_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/AlairenPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/alairen-photo.jpg'
    },
    {
        id: 'dekiru',
        nameKey: 'dekiru_name',
        roleKey: 'dekiru_role',
        bioKey: 'dekiru_bio',
        drinkKey: 'dekiru_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/DekiruPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/dekiru-photo.jpg'
    },
    {
        id: 'dragon',
        nameKey: 'dragon_name',
        roleKey: 'dragon_role',
        bioKey: 'dragon_bio',
        drinkKey: 'dragon_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/DragonPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/dragon-photo.jpg'
    },
    {
        id: 'galleta',
        nameKey: 'galleta_name',
        roleKey: 'galleta_role',
        bioKey: 'galleta_bio',
        drinkKey: 'galleta_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/GalletaPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/galleta-photo.jpg'
    },
    {
        id: 'koto',
        nameKey: 'koto_name',
        roleKey: 'koto_role',
        bioKey: 'koto_bio',
        drinkKey: 'koto_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/KotoPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/koto-photo.jpg'
    },
    {
        id: 'dezzu',
        nameKey: 'dezzu_name',
        roleKey: 'dezzu_role',
        bioKey: 'dezzu_bio',
        drinkKey: 'dezzu_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/DezzuPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/dezzu-photo.jpg'
    },
    {
        id: 'loxy',
        nameKey: 'loxy_name',
        roleKey: 'loxy_role',
        bioKey: 'loxy_bio',
        drinkKey: 'loxy_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/0w4kUp98V4Ur2CBm2CFXOH?si=EuOuFKkNSh6sedw-QefwoA',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/loxy-lucy-photo.jpg'
    },
    {
        id: 'lulu',
        nameKey: 'lulu_name',
        roleKey: 'lulu_role',
        bioKey: 'lulu_bio',
        drinkKey: 'lulu_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/3ed3aqtVNBhNgTxFWOkBZ8?si=907UlHP1QmmsDVeMhaGt3w',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/lulu-photo.jpg'
    },
    {
        id: 'nebula',
        nameKey: 'nebula_name',
        roleKey: 'nebula_role',
        bioKey: 'nebula_bio',
        drinkKey: 'nebula_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/NebulaPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/nebula-photo.jpg'
    },
    {
        id: 'papu',
        nameKey: 'papu_name',
        roleKey: 'papu_role',
        bioKey: 'papu_bio',
        drinkKey: 'papu_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/PapuPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/papu-photo.jpg'
    },
    {
        id: 'mcandres',
        nameKey: 'mcandres_name',
        roleKey: 'mcandres_role',
        bioKey: 'mcandres_bio',
        drinkKey: 'mcandres_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/0DknIcd5PtzFheq2F1ogYf?si=Q7w3DAF9Q1edPE1pHniflg&pi=T3-Wc03cQHebu&nd=1&dlsi=1f60394b4b194776',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/andrea-photo.jpg'
    },
    {
        id: 'chepescm',
        nameKey: 'chepescm_name',
        roleKey: 'chepescm_role',
        bioKey: 'chepescm_bio',
        drinkKey: 'chepescm_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/6mRv4Tp5kQAb0vtUC94egO?si=Jhg3mv_aR1GVDqdQmxy3VA&pi=ewUUmIYVRMKaN',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/chepes-photo.jpg'
    },
    {
        id: 'razielsempai',
        nameKey: 'razielsempai_name',
        roleKey: 'razielsempai_role',
        bioKey: 'razielsempai_bio',
        drinkKey: 'razielsempai_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/RazielSempaiPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/raziel-photo.jpg'
    },
    {
        id: 'ruto',
        nameKey: 'ruto_name',
        roleKey: 'ruto_role',
        bioKey: 'ruto_bio',
        drinkKey: 'ruto_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/RutoPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/ruto-photo.jpg'
    },
    {
        id: 'rosy',
        nameKey: 'rosy_name',
        roleKey: 'rosy_role',
        bioKey: 'rosy_bio',
        drinkKey: 'rosy_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/RosyPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/rosy-photo.jpg'
    },
    {
        id: 'siniz',
        nameKey: 'siniz_name',
        roleKey: 'siniz_role',
        bioKey: 'siniz_bio',
        drinkKey: 'siniz_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/SiniZPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/siniz-photo.jpg'
    },
    {
        id: 'veiga',
        nameKey: 'veiga_name',
        roleKey: 'veiga_role',
        bioKey: 'veiga_bio',
        drinkKey: 'veiga_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/VeigaPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/veiga-photo.jpg'
    },
    {
        id: 'youkai',
        nameKey: 'youkai_name',
        roleKey: 'youkai_role',
        bioKey: 'youkai_bio',
        drinkKey: 'youkai_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/YoukaiPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/youkai-photo.jpg'
    },
    {
        id: 'naruhishi',
        nameKey: 'naruhishi_name',
        roleKey: 'naruhishi_role',
        bioKey: 'naruhishi_bio',
        drinkKey: 'naruhishi_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/NaruhishiPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/naruhishi-photo.jpg'
    },
    {
        id: 'riku',
        nameKey: 'riku_name',
        roleKey: 'riku_role',
        bioKey: 'riku_bio',
        drinkKey: 'riku_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/RikuPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/riku-photo.jpg'
    },
    {
        id: 'eli',
        nameKey: 'eli_name',
        roleKey: 'eli_role',
        bioKey: 'eli_bio',
        drinkKey: 'eli_drink_name',
        spotifyURL: 'https://open.spotify.com/playlist/EliPlaylistID',
        imageSrc: 'https://raw.githubusercontent.com/librasclub/web/refs/heads/main/assets/images/team/eli-photo.jpg'
    },
];