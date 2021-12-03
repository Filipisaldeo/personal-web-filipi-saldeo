let blogs = [];

function addBlog(event) {
    event.preventDefault();

    let titleData = document.getElementById('input-blog-title').value;
    let contentData = document.getElementById('input-blog-content').value;
    let imageData = document.getElementById('input-blog-image').value;

    let blog = {
        author: 'Rhoma Irama',
        title: titleData,
        content: contentData,
        image: imageData,
        postedAt: Date(),
    };

    blogs.push(blog);

    document.getElementById('input-blog-title').value='';
    document.getElementById('input-blog-content').value='';
    document.getElementById('input-blog-image').value='';

    renderBlog();
}

function renderBlog () {
}
function renderBlog() {
    let blogContainer = document.getElementById('contents');
  
    blogContainer.innerHTML = '';
  
    for (let i = 0; i <= blogs.length; i++) {
      blogContainer.innerHTML += `<div class="blog-list-item">
                                      <div class="blog-image">
                                      <img src= ${blogs[i].image} alt="" />
                                      </div>
                                      <div class="blog-content">
                                      <div class="btn-group">
                                          <button class="btn-edit">Edit Post</button>
                                          <button class="btn-post">Post Blog</button>
                                      </div>
                                      <h1>
                                          <a href="blog-detail.html" target="_blank">
                                              ${blogs[i].title}
                                          </a>
                                      </h1>
                                      <div class="detail-blog-content">
                                          ${blogs[i].postedAt} | ${blogs[i].author}
                                      </div>
                                      <p>${blogs[i].content}</p>
                                      </div>
                                  </div>`;
    }
  }

//array menyimpan data semua siswa
//let siswa1 = 'Amila Zahira';
//let siswa2 = 'Ishaq Usuludin';
///let siswa3 = 'Salsabila';
//let siswa4 = 'Kevin';


//let semuaSiswa =[
    //'Amila Zahira',
    //'Ishaq Usuludin',
    //'Salsabila',
    //'Kevin',
    //'Rico Maulana',
//];

//let siswaIndex1 = semuaSiswa[1];
//console.log(siswaIndex1);

//object untuk menyimpan data DETAIL siswa
//let biodataSiswa = {
    //namaSiswa: 'Filipi Saldeo',
   // nisn: 7778987654567,
   // jenisKelamin: 'Pria',
  //  agama: 'Kristen',
 //   umur: 16,
  //  kelas: 10,
//};

//console.log(biodataSiswa.namaSiswa);
//console.log(biodataSiswa.nisn);
//console.log(biodataSiswa.jenisKelamin);
//console.log(biodataSiswa.agama);
//console.log(biodataSiswa.umur);
//console.log(biodataSiswa.kelas);

//array of object