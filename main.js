
// MANGIL ELEMEN HTML //

    let body = document.body
    let main = document.querySelector('main')

    let info = document.querySelector('.info')
    let layar = document.querySelector('.layar')

    let step0 = document.querySelector('.step0')
    let step1 = document.querySelector('.step1')
    let step2 = document.querySelector('.step2')
    let step3 = document.querySelector('.step3')
    let step4 = document.querySelector('.step4')

    let nama0 = document.querySelector('.nama0')
    let nama1 = document.querySelector('.nama1')
    let nama2 = document.querySelector('.nama2')
    let nama3 = document.querySelector('.nama3')
    let nama4 = document.querySelector('.nama4')

    let inputAwal = document.querySelector('.inputAwal')
    let inputNama = document.querySelector('.inputNama')
    let inputPengeluaran = document.querySelector('.inputPengeluaran')

    let btn0 = document.querySelector('.btn0')
    let btn1 = document.querySelector('.btn1')
    let btn2 = document.querySelector('.btn2')
    let btn3 = document.querySelector('.btn3')

    let saldoAnda = document.querySelector('.saldoAnda')
    let namaPengeluaran = document.querySelector('.namaPengeluaran')
    let pengeluaran = document.querySelector('.pengeluaran')
    let sisaSaldo = document.querySelector('.sisaSaldo')

    let jarak = document.querySelector('.jarak')
    let daftarTransaksi = document.querySelector('.daftarTransaksi')

    let error1 = document.querySelector('.error1')
    let error2 = document.querySelector('.error2')
    let error3 = document.querySelector('.error3')

    let vel1 = 0
    let vel2 = ''
    let vel3 = 0
    let sisa = 0

    const maxkarakter = 10
    const maxkarakter1 = 20
    let hitungsalah = 0
    

    step1.style.display = 'none'
    step2.style.display = 'none'
    step3.style.display = 'none'
    step4.style.display = 'none'
    info.style.display = 'none'

// AWALAN
btn0.focus()

btn0.addEventListener('click', function() {

    

    main.classList.add('mainhilang')
    info.classList.add('infomasuk')
    
    setTimeout (() => {
        main.classList.add('mainmuncul')
        step0.style.display = 'none'
        step1.style.display = 'block'
        
        main.style.gap = '7rem'
        info.style.display = 'block'

        inputAwal.focus();
    },500)
    setTimeout (() => {
        info.style.height = '13.5rem'
        info.classList.remove('infomasuk')
        
    },700)
})

// RIWAYAT TRANSAKSI

    // SALDO AWAL

        btn1.addEventListener("click", function() {

            vel1 = Number(inputAwal.value)

            if(vel1 <= 0) {
                hitungsalah++;
            }else{
                    hitungsalah = 0
                    body.classList.remove('body-marah')
                }

            if(hitungsalah >= 3) {
                    body.classList.add('body-marah')

                    setTimeout(() => {
                        body.classList.remove('body-marah')
                    },400)
                }
            
            if(vel1 <= 0 || isNaN(vel1)) {
                error1.classList.add('active')

                layar.style.transition = 'none'
                layar.classList.add('getar-aktif') 
                info.classList.add('infoerror')

                
                layar.classList.add('layar-permanen')
                body.classList.add('body-permanen')

                setTimeout(() => {
                    layar.classList.remove('getar-aktif')
                    info.classList.remove('infoerror')
                    layar.style.transition = '';
                }, 400);
                return
            }

            if(vel1 <= 0 || isNaN(vel1)) {
                body.classList.add('body-marah')
            }

            saldoAnda.textContent = vel1

            step1.style.display = 'none'
            step2.style.display = 'block'

            inputNama.focus()
        })

        inputAwal.addEventListener("input", function() {
            error1.classList.remove('active')
            
            if(this.value.length > maxkarakter) {
                this.value = this.value.slice(0,maxkarakter)
            }
        })

    // NAMA PENGELUARAM

        btn2.addEventListener("click", function() {

            vel2 = inputNama.value.trim()

            if(vel2 <= 0) {
                hitungsalah++
            }else{
                    hitungsalah = 0
                    body.classList.remove('body-marah')
                }
            
            if(hitungsalah >= 3) {
                body.classList.add('body-marah')
                layar.classList.add('layar-permanen')
                body.classList.add('body-permanen')

                setTimeout(() => {
                    body.classList.remove('body-marah')
                }, 500)
            }

            if( vel2 === '') {
                error2.classList.add('active')

                layar.style.transition = 'none'
                layar.classList.add('getar-aktif')

                setTimeout(() => {
                    layar.classList.remove('getar-aktif')
                    layar.style.transition = '';
                }, 500);
                return
            }
            namaPengeluaran.textContent = vel2

            step2.style.display = 'none'
            step3.style.display = 'block'

            inputPengeluaran.focus()
        })

        inputNama.addEventListener("input", function() {
            error2.classList.remove('active')

            if(this.value.length > maxkarakter1) {
                this.value = this.value.slice(0,maxkarakter1)
            }
        })
    
    // PENGELUARAN

        btn3.addEventListener('click', function() {

            vel3 = Number(inputPengeluaran.value)

            info.style.height = '13.5rem'
            jarak.style.display = 'block'

            info.classList.add('tambahan')

            if(vel3 <= 0 ) {
                hitungsalah++
            }else{
                    hitungsalah = 0
                    body.classList.remove('body-marah')
                }
            if(hitungsalah >= 3) {
                body.classList.add('body-marah')

                setTimeout(() => {
                    body.classList.remove('body-marah')
                }, 500)
            }

            if( vel3 <= 0 || isNaN(vel3)) {
                error3.classList.add('active')
                layar.classList.add('layar-permanen')
                body.classList.add('body-permanen')

                layar.style.transition = 'none'
                layar.classList.add('getar-aktif')

                setTimeout(() => {
                    layar.classList.remove('getar-aktif')
                    layar.style.transition = '';
                }, 500);
                return
            }
            pengeluaran.textContent = vel3

            sisa = vel1 - vel3
            sisaSaldo.textContent = sisa

            let teksbaru = document.createElement('li')
            teksbaru.classList.add('teksanimasi')
            teksbaru.textContent = `Saldo anda bernominal Rp.${vel1}. Peneluaran bernama ${vel2}
            bernominal Rp.${vel3}. Sisa saldo anda sekarang Rp. ${sisa}.`

            daftarTransaksi.append(teksbaru)

            step3.style.display = 'none'
            step4.style.display = 'block'
        })
    
        inputPengeluaran.addEventListener("input", function() {
            error3.classList.remove('active')

            if(this.value.length > maxkarakter) {
                this.value = this.value.slice(0,maxkarakter)
            }
        })

 // STYLE CSS

 btn0.addEventListener('click', function(){
     body.classList.add('body-permanen')
     layar.classList.add('layar-animasi')
     
     
 })

// window.addEventListener('keydown', function(e) {
//     const isStep0Visible = window.getComputedStyle(step0).display !== 'none';

//     if (e.key === 'Enter' && isStep0Visible) {
//         btn0.click();
//     }
// });

focus

 inputAwal.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        btn1.click()
    }
 })
 inputNama.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        btn2.click()
    }
 })
 inputPengeluaran.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        btn3.click()
    }
 })

        
        

