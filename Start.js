document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector("#screen");
    const result = document.querySelector("#result");

    let startTime;
    let endTime;
    const records = [];
    let timeoutId;

    screen.addEventListener("click", () => {
        if (screen.classList.contains("waiting")) {
            screen.classList.replace("waiting", "ready");
            screen.textContent = "초록색이 되면 클릭하세요";
            timeoutId = setTimeout(() => {
            startTime = new Date();
            screen.classList.replace("ready", "now");
            screen.textContent = "클릭 하세요!";
          }, Math.floor(Math.random() * 1000) + (Math.random() * 1000));
        } else if (screen.classList.contains("ready")) {
            clearTimeout(timeoutId);
            screen.textContent = '너무 성급합니다!';
            screen.classList.replace('ready', 'waiting')
        } else if (screen.classList.contains("now")) {
            endTime = new Date();
            const nowTime = endTime - startTime;
            records.push(nowTime);
            const average = records.reduce((a, b) => a + b) / records.length;
            result.innerText = `현재: ${nowTime}ms, 평균: ${parseInt(average)}ms`;
        screen.classList.replace("now", "waiting");
        screen.textContent = "초록색이 되면 클릭하세요";
        }
    });
});