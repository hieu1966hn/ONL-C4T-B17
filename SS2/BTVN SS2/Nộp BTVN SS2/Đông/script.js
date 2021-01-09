window.onload = () => {
    const INPUT = document.querySelector("#input");
    const OUTPUT = document.querySelector("#output");
    const BTWHAT = document.querySelector("#btnao");

    window.bt1 = () => {
        BTWHAT.innerText = 1;
        OUTPUT.value = INPUT.value
            .split("") 
            .reverse() 
            .join(""); 
    }

    window.bt2 = () => {
        BTWHAT.innerText = 2;
        OUTPUT.value = INPUT.value
            .replace(/\D/g, "") 
            .length 
    }

    window.bt3 = () => {
        BTWHAT.innerText = 3;
        let i = INPUT.value.split(/\r\n|\n|\r| /g) 
            .map(x => parseInt(x, 10)) 
            .filter(x => !isNaN(x)) 

        let n = i[0] ? i[0] : 0; 

        OUTPUT.value = i.slice(1) 
            .slice(0, n) 
            .reduce((a, v) => v % 2 === 0 ? a + 1 : a, 0) 
    }

    window.bt4 = () => {
        BTWHAT.innerText = 4;
        OUTPUT.value = ""; 
        for (let i = 1; i <= (isNaN(+INPUT.value) ? 0 : +INPUT.value); i++) { 
            OUTPUT.value += "*".repeat(i) + "\n"; 
        }
    }

    window.bt5 = () => {
        BTWHAT.innerText = 5;
        function isPrimeNumber(v) { 
            for (let i = 2; i < v; i++) { 
                if (v % i === 0) return false; 
            }
            return true;
        }

        let i = +INPUT.value; 
        if (isNaN(i) || i < 1) {
            OUTPUT.value = "Lỗi: Đầu vào (Input) không phải là số tự nhiên.";
            return;
        } 

        i = Math.round(i); 
        
        for (let c = i + 1; ; c++) {
            if (isPrimeNumber(c)) {
                OUTPUT.value = c;
                return; 
            }
        }
    }
}