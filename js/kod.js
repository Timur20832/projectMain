document.getElementById('param-1').oninput = function () {
    document.getElementById('password-length').innerHTML = this.value;
}
let result;
let par1;
let par2;
let par3;
let par4;
let par5;
let clear1 =document.getElementById('close2w') ,
    generate1 =document.getElementById('generatePass');
function generate(){
    const y = document.getElementsByName('name1')[0].value, m = document.getElementsByName('name2')[0].value,
        z = document.getElementsByName('name3')[0].value, k = document.getElementsByName('name4')[0].value,
        c = document.getElementsByName('name5')[0].value;
        let passLength = parseInt(document.getElementById('param-1').value),
            rs = ``,
            rk = ``,
            rj = ``,
            ry = ``,
            ru = ``;
    result = y+m+k+z+c;
    par1 = y+m+k;
    par2 = z+m+k;
    par3 = y+c;
    par4 = y+m+c;
    par5 = result;
    if (y !== "" && m !== "" && k !== "" && c !== "" && z !== "") {
        if (c.length === 3) {
            while (rs.length < passLength) {
                rs += y[0] + y[1] + m[0] + m[1] + y[6] + y[7] + k[0] + k[1] + k[2];
            }
            //console.log(rs);
            while (rk.length < passLength) {
                rk += par2[Math.floor(Math.random() * passLength)];
            }
            //console.log(rk);
            while (rj.length < passLength) {
                rj += par3[Math.floor(Math.random() * passLength)];
            }
            //console.log(rj)
            while (ry.length < passLength) {
                ry += par4[Math.floor(Math.random() * passLength)];
            }
            //console.log(ry);
            while (ru.length < passLength) {
                ru += par5[Math.floor(Math.random() * passLength)];
            }
            //console.log(ru);
            document.getElementById('out').innerHTML += '<p>' + rs + '</p>';
            document.getElementById('out').innerHTML += '<p>' + rk + '</p>';
            document.getElementById('out').innerHTML += '<p>' + rj + '</p>';
            document.getElementById('out').innerHTML += '<p>' + ry + '</p>';
            document.getElementById('out').innerHTML += '<p>' + ru + '</p>';
        } else {
            document.getElementById('out').innerHTML += '<p>' + 'Возникла ошибка при заполнении полей' + '</p>';

        }
    } else {
        document.getElementById('out').innerHTML += '<p>' + 'Возникла ошибка при заполнении полей' + '</p>';

    }

    /*}else{
        document.getElementById('out').innerHTML = '';
    }*/
}
function clear() {
    document.getElementById(`out`).innerHtml = '';
}
generate1.addEventListener("click", ()=> generate()) ;
clear1.addEventListener("click", ()=> clear()) ;