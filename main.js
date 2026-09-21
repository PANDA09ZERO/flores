onload = () =>{
    document.body.classList.remove("container");
    const savedStyle = localStorage.getItem('flowerStyle') || 'original';
    if (savedStyle === 'brutal') {
        document.body.classList.add('brutal-mode');
    }
};

function toggleBrutal() {
    const body = document.getElementById('flower-body');
    const btn = document.getElementById('brutal-float-bar');
    if (body.classList.contains('brutal-mode')) {
        body.classList.remove('brutal-mode');
        localStorage.setItem('flowerStyle', 'original');
        btn.style.display = 'none';
    } else {
        body.classList.add('brutal-mode');
        localStorage.setItem('flowerStyle', 'brutal');
        btn.style.display = 'block';
        btn.style.position = 'fixed';
        btn.style.top = '10px';
        btn.style.right = '10px';
        btn.style.zIndex = '9999';
    }
}
