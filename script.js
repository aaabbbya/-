const greetings = [
    "超哥,您的课堂笑料比段子手还多,教师节快乐!",
    "没有您,我们的知识就像没有WiFi的手机,教师节快乐!",
    "超哥,您是我们的人生GPS,没有您我们就迷路啦!",
    "您的智慧比爱因斯坦的头发还多,教师节快乐!",
    "超哥,您是我们的维基百科,但比它靠谱多了!",
    "没有您,我们就像没有表情包的聊天,太无趣了!",
    "超哥,您是我们的人生充电宝,没您我们就没电了!",
    "您的课堂比网红直播间还精彩,教师节快乐!",
    "超哥,您是我们的人生解压神器,谢谢您!",
    "您的知识比宇宙还广阔,我们只能仰望啦!",
    "超哥,您是我们的人生导航仪,没您我们就原地打转啦!",
    "您的幽默感比喜剧演员还强,教师节快乐!",
    "超哥,您是我们的知识加油站,没您我们就'没油'了!",
    "您的课堂比过山车还刺激,教师节快乐!",
    "超哥,您是我们的人生'百度',但搜索结果比它准确多了!",
    "没有您,我们的大脑就像没有内存的电脑,教师节快乐!",
    "超哥,您是我们的人生'修图软件',让我们的未来更加美好!",
    "您的教学技能比魔术师的手法还神奇,教师节快乐!",
    "超哥,您是我们的人生'防火墙',保护我们远离无知的病毒!",
    "您的课堂比美食节目还让人回味无穷,教师节快乐!"
];

const greetingsContainer = document.getElementById('greetings-container');
const changeGreetingButton = document.getElementById('changeGreeting');

function getRandomGreetings(count) {
    const shuffled = greetings.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function updateGreetings() {
    greetingsContainer.innerHTML = '';
    const selectedGreetings = getRandomGreetings(8);
    selectedGreetings.forEach(greeting => {
        const greetingElement = document.createElement('div');
        greetingElement.className = 'greeting';
        greetingElement.textContent = greeting;
        greetingsContainer.appendChild(greetingElement);
    });
}

changeGreetingButton.addEventListener('click', updateGreetings);

// 初始化问候语
updateGreetings();

const imageUpload = document.getElementById('imageUpload');
const floatingImagesContainer = document.getElementById('floating-images');

imageUpload.addEventListener('change', function(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'floating-image-container';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            img.className = 'floating-image';
            
            // 随机位置
            imgContainer.style.top = Math.random() * 70 + 15 + '%';
            imgContainer.style.left = Math.random() * 70 + 15 + '%';
            
            imgContainer.appendChild(img);
            
            // 添加点击事件监听器到容器
            imgContainer.addEventListener('click', function(event) {
                event.stopPropagation(); // 阻止事件冒泡
                if (confirm('确定要删除这张图片吗?')) {
                    this.remove();
                }
            });
            
            floatingImagesContainer.appendChild(imgContainer);
        }
        
        reader.readAsDataURL(file);
    }
});

const deleteAllImagesButton = document.getElementById('deleteAllImages');

deleteAllImagesButton.addEventListener('click', function() {
    if (confirm('确定要删除所有图片吗？')) {
        floatingImagesContainer.innerHTML = '';
    }
});