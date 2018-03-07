// (function () {

//TODO Add functionality to the links to make them render each of the content in the designated area;
const renderArea = document.querySelector("#content-render");
// console.log(renderArea);

const buildAbout =  () => {
    let html = "";
    html += `<section><h3 class="about-sec">About Me</h3>`;
    html += `<p>I am a web developer currently attending Codeup, a full-immersion career accelerator. The curriculum focuses on training students to become Full Stack Web Developers using Java. My expected graduation date is May 17, 2018. I am excited to begin my career as a developer and look forward to networking and meeting new people in the industry.</p>`;

    html += `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam aut culpa, dolor est exercitationem expedita explicabo ipsum iste itaque magnam maiores minus nisi nobis non quis quisquam sit ullam! Culpa est labore provident qui. Consequatur debitis deleniti dignissimos eligendi esse explicabo ipsam itaque, iure, laborum mollitia natus numquam quaerat tempora. Amet commodi cumque deserunt dolorem, harum laudantium quam vitae! Accusamus accusantium amet id iste odio quam quidem quis quod suscipit temporibus. Beatae deleniti distinctio ea ex exercitationem fugit harum hic illum non quae qui quia, quibusdam quod reiciendis similique sunt voluptate. Fugiat quia quisquam quo sapiente sed vel velit!</p></section>`;
    return html;
};

const buildPortfolio = () => {
    const portfolioImg1 = `<img src="./images/project-placeholder.jpeg" alt="Portfolio Project 1" class="portfolio-thumbnail center-block">`;
    const portfolioImg2 = `<img src="./images/project-placeholder.jpeg" alt="Portfolio Project 1" class="portfolio-thumbnail center-block">`;
    const portfolioImg3 = `<img src="./images/project-placeholder.jpeg" alt="Portfolio Project 1" class="portfolio-thumbnail center-block">`;
    let html = "";
    html += `<div class="row"><div class="col-xs-12">${portfolioImg1}</div></div>`;
    html += `<div class="row"><div class="col-xs-12">${portfolioImg2}</div></div>`;
    html += `<div class="row"><div class="col-xs-12">${portfolioImg3}</div></div>`;

    return html;
};



// renderArea.innerHTML = buildAbout();
renderArea.innerHTML = buildPortfolio();





// })();



