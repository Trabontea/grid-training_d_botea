const urls = [
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',

  'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=640&q=80',
  'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=640&q=80',
  'https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1550686041-366ad85a1355?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=640&q=80',
  'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=640&q=80',
  'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=640&q=80',
  'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1511963211013-83bba110595d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
  'https://images.unsplash.com/photo-1504470695779-75300268aa0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=640&q=80',
];

const container = document.querySelector('.container');
const documentFragment =  new DocumentFragment();

container.addEventListener('load', (event) => {
  const image = event.target;
  const spans = Math.round(image.height / 10 + 1)
  image.parentElement.style.gridRowEnd= `span ${spans}`;
}, true)

urls.forEach((url) => {
  const image = document.createElement('img');
  const picture = document.createElement('picture');
  image.src = url;
  picture.append(image)
  documentFragment.append(picture);
})

container.append(documentFragment);