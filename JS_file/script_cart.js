const btn_increase = document.querySelector("#qunt_increase");
const btn_decrease = document.querySelector("#qunt_decrease");
const input_num = document.querySelector(".input_num");
btn_increase.addEventListener("click", () => {
    var input_num_count = Number(input_num.innerText);
    input_num.innerText = input_num_count + 1
})
btn_decrease.addEventListener("click", () => {
    var input_num_count = Number(input_num.innerText);
    if (input_num_count > 0) {
        input_num.innerText = input_num_count - 1
    }
})