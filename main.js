   const khodams = [
            "Garuda", "Naga", "Buto Ijo", "Kuda Sembrani", "Harimau", "Gajah", "Burung Elang", "Kancil",
            "Nyi Roro Kidul", "Genderuwo", "Pocong", "Kuntilanak", "Wewe Gombel", "Leak", "Barong", "Rangda",
            "Jenglot", "Babi Ngepet", "Sundel Bolong", "Hantu Jeruk Purut", "Si Manis Jembatan Ancol", 
            "Pangeran Diponegoro", "Buto Terong", "Monyet Putih", "Macan Kumbang", "Bunglon", "Rajawali", 
            "Burung Hantu", "Ayam Cemani", "Buaya Putih", "Lembu Suro", "Nyai Blorong", "Kuyang", 
            "Sundel Bolong", "Hantu Bangku", "Jurig", "Orang Bunian", "Hantu Penunggu", "Hantu Air",
            "Nyi Blorong", "Pangeran Diponegoro", "Lukamba", "Hantu Gergasi", "Dewi Sri", "Nyi Mas Melati"
        ];

        function checkKhodam() {
            const name = document.getElementById('nameInput').value.trim().toLowerCase();
            const resultDiv = document.getElementById('result');
            const loadingDiv = document.getElementById('loading');

            resultDiv.innerText = "";
            loadingDiv.style.display = 'block';

            setTimeout(() => {
                loadingDiv.style.display = 'none';
                if (name) {
                    const hash = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const khodam = khodams[hash % khodams.length];
                    resultDiv.innerText = `Khodam Anda adalah: ${khodam}`;
                } else {
                    resultDiv.innerText = "Silahkan masukkan nama Anda.";
                }
            }, 3000); // 3 detik
        }