const getInitialData = () => [
  {
    id: 1,
    title: "React",
    body: "React merupakan JavaScript library yang sangat populer dalam membangun User Interface. Sebelum Anda mengenal lebih dalam tentang React, di modul ini kami akan mengajak berkenalan lebih dalam tentang React.",
    createDat:"2022-04-14T04:27:34.572Z",
    archived: false,
},
{
    id: 2,
    title: "React ecosystem",
    body: "React memiliki ekosistem yang luas dan dapat dikombinasikan dengan library, tools, teknologi, atau hal lain yang menunjang pengalaman lebih baik dalam mengembangkan aplikasi React. ",
    createDat:"2022-04-14T04:27:34.572Z",
    archived: false,
},
{
    id: 3,
    title: "Composition",
    body: "Composition atau komposisi merupakan proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks. Di React, komposisi sering dipraktikkan ketika membuat sebuah komponen. Alih-alih mengembalikan data, React component mengembalikan UI.",
    createDat:"2022-04-14T04:27:34.572Z",
    archived: false,
},
{
    id: 4,
    title: "Declarative Code",
    body: "Salah satu konsep yang ada di React adalah menulis kode secara deklaratif. Mungkin Anda pernah mendengar istilah tersebut dan membandingkannya dengan kode imperatif. Berikut pengertiannya.",
    createDat:"2022-04-14T04:27:34.572Z",
    archived: false,
},
{
    id: 5,
    title: "React is just javaScript",
    body: "Meskipun terdengar kontroversial, “React hanyalah JavaScript” ada benarnya juga. Kami memiliki dua alasan mengapa demikian.",
    createDat:"2022-04-14T04:27:34.572Z",
    archived: false,
}
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
