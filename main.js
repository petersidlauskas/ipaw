const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


        let slideImg = document.getElementById("slideImg");
        let images = new Array (
            "https://www.akc.org/wp-content/uploads/2017/11/Longhaired-Dachshund-standing-outdoors.jpg",
            "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
            "https://www.science.org/do/10.1126/science.abi5787/abs/main_puppies_1280p.jpg",
            "https://d.newsweek.com/en/full/1979380/dog-running-through-autumn-leaves.jpg"
            
        );
        let len = images.length;
        let i = 0;

        function slider(){
            if(i > len-1){
                i=0;
            }
            slideImg.src = images[i];
            i++;
            setTimeout('slider()',3000);
        }
