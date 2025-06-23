const QUESTIONS_PER_ROUND = 15;
let timeLeft = 150; // 1 minute in seconds
const timerDisplay = document.getElementById('timer');

const countdown = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.innerHTML = 'Time is up!';

        disableOptions();  // Disable buttons so user cannot continue

        // After 3 seconds, show the results using your existing function
        setTimeout(() => {
            showResults();
        }, 3500);
    } else {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        if (timeLeft <= 30) {
            timerDisplay.classList.add('low-time');
        }
    }
}, 1000);

function disableOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.disabled = true);
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.disabled = true;
}
const questions = [
    { question: "Who is known as the 'King of Pop'?", options: ["Michael Jackson", "Elvis Presley", "Prince", "Stevie Wonder"], answer: 0 },
    { question: "What is the name of the Beatles' last studio album?", options: ["Abbey Road", "Let It Be", "Sgt. Pepper's Lonely Hearts Club Band", "The White Album"], answer: 1 },
    { question: "Which instrument does Jimi Hendrix play?", options: ["Guitar", "Drums", "Bass", "Piano"], answer: 0 },
    { question: "What genre is characterized by a strong backbeat, syncopation, and improvisation?", options: ["Classical", "Country", "Jazz", "Rock"], answer: 2 },
    { question: "Who composed the Four Seasons?", options: ["Bach", "Beethoven", "Vivaldi", "Mozart"], answer: 2 },
    { question: "What is the name of Adele's debut album?", options: ["19", "21", "25", "30"], answer: 0 },
    { question: "Which band is known for the song 'Bohemian Rhapsody'?", options: ["Queen", "The Rolling Stones", "Led Zeppelin", "Pink Floyd"], answer: 0 },
    { question: "What musical element refers to the speed of a piece?", options: ["Tempo", "Rhythm", "Melody", "Harmony"], answer: 0 },
    { question: "Which singer is known as 'Material Girl'?", options: ["Lady Gaga", "Beyonce", "Madonna", "Rihanna"], answer: 2 },
    { question: "What is a group of musicians playing together called?", options: ["Solo", "Duet", "Orchestra", "A Capella"], answer: 2 },
    { question: "Which rapper had the hit song 'Lose Yourself'?", options: ["Jay-Z", "Kanye West", "Eminem", "Drake"], answer: 2 },
    { question: "What is the name of Taylor Swift's second album?", options: ["Fearless", "Speak Now", "Red", "1989"], answer: 0 },
    { question: "Which rock band released the album 'Nevermind'?", options: ["Pearl Jam", "Soundgarden", "Nirvana", "Alice in Chains"], answer: 2 },
    { question: "What is a sequence of musical notes that is perceived as a single entity?", options: ["Chord", "Scale", "Melody", "Harmony"], answer: 2 },
    { question: "Which artist is known for wearing eccentric costumes and performing under the alias Ziggy Stardust?", options: ["Elton John", "Freddie Mercury", "David Bowie", "Prince"], answer: 2 },
    { question: "What is the highest female singing voice?", options: ["Alto", "Tenor", "Soprano", "Bass"], answer: 2 },
    { question: "Which country singer is known for the song 'Jolene'?", options: ["Reba McEntire", "Dolly Parton", "Loretta Lynn", "Carrie Underwood"], answer: 1 },
    { question: "What is the name of the musical based on the life of Alexander Hamilton?", options: ["Wicked", "Rent", "Hamilton", "Les Miserables"], answer: 2 },
    { question: "Which instrument is commonly featured in reggae music?", options: ["Sitar", "Bagpipes", "Steelpan", "Harp"], answer: 2 },
    { question: "What is the term for singing without instrumental accompaniment?", options: ["Acoustic", "A Capella", "Unplugged", "Instrumental"], answer: 1 },
    { question: "Which singer is known for hits like 'Like a Prayer' and 'Vogue'?", options: ["Janet Jackson", "Mariah Carey", "Madonna", "Whitney Houston"], answer: 2 },
    { question: "What is the main percussion instrument in a drum set?", options: ["Snare drum", "Bass drum", "Cymbal", "Tom-tom"], answer: 1 },
    { question: "Which genre of music is closely associated with the blues?", options: ["Classical", "Country", "Rock and Roll", "Hip Hop"], answer: 2 },
    { question: "What is the name of the most famous opera by Giacomo Puccini?", options: ["La Bohème", "Tosca", "Madame Butterfly", "Turandot"], answer: 0 },
    { question: "Which artist is known for the song 'Hallelujah'?", options: ["Bob Dylan", "Leonard Cohen", "Jeff Buckley", "Rufus Wainwright"], answer: 1 },
    { question: "What is the musical term for a gradually increasing volume?", options: ["Crescendo", "Decrescendo", "Forte", "Piano"], answer: 0 },
    { question: "Which band is known for their elaborate stage performances and face paint?", options: ["AC/DC", "Kiss", "Aerosmith", "Guns N' Roses"], answer: 1 },
    { question: "What is the name of the annual music festival held in Indio, California?", options: ["Lollapalooza", "Glastonbury", "Coachella", "Burning Man"], answer: 2 },
    { question: "Which pop star is known for her alter ego, Roman Zolanski?", options: ["Katy Perry", "Rihanna", "Nicki Minaj", "Lady Gaga"], answer: 2 },
    { question: "What is the name of the device used to play vinyl records?", options: ["Cassette player", "CD player", "Turntable", "MP3 player"], answer: 2 },
    { question: "Which Jamaican musical style is considered a predecessor to reggae?", options: ["Ska", "Rocksteady", "Mento", "Dub"], answer: 1 },
    { question: "What is the name of the famous music venue in New York City known for hosting iconic performances?", options: ["The Apollo Theater", "Carnegie Hall", "Madison Square Garden", "Radio City Music Hall"], answer: 0 },
    { question: "Which member of the Beatles was tragically murdered in 1980?", options: ["Paul McCartney", "George Harrison", "John Lennon", "Ringo Starr"], answer: 2 },
    { question: "What is the name of the famous electric guitar played by Eric Clapton?", options: ["The Strat", "Black Beauty", "Lucille", "Brownie"], answer: 3 },
    { question: "Which female singer is known as the 'Queen of Soul'?", options: ["Etta James", "Aretha Franklin", "Diana Ross", "Tina Turner"], answer: 1 },
    { question: "What is the term for a short musical idea, a recurring figure, rhythm, or melodic fragment?", options: ["Phrase", "Motif", "Cadence", "Scale"], answer: 1 },
    { question: "Which musical refers to a family of Austrian singers?", options: ["The King and I", "The Sound of Music", "Oklahoma!", "My Fair Lady"], answer: 1 },
    { question: "What is the name of the famous music publishing company founded in New York City?", options: ["EMI", "Sony Music", "Warner Chappell", "Tin Pan Alley"], answer: 3 },
    { question: "Which singer had a hit song called 'Purple Rain'?", options: ["Michael Jackson", "Prince", "Stevie Wonder", "Lionel Richie"], answer: 1 },
    { question: "What is the term for a musical form consisting of a repeating section (the refrain) interspersed with new verses?", options: ["Sonata", "Rondo", "Theme and Variations", "Verse-Chorus Form"], answer: 3 },
    { question: "Which country is known for its tango music and dance?", options: ["Spain", "Italy", "Argentina", "Brazil"], answer: 2 },
    { question: "What is the term for the highness or lowness of a musical sound?", options: ["Timbre", "Pitch", "Dynamics", "Harmony"], answer: 2 },
    { question: "Which instrument is known as the 'king of instruments'?", options: ["Piano", "Organ", "Violin", "Guitar"], answer: 1 },
    { question: "What is the name of Billie Eilish's debut album?", options: ["When We All Fall Asleep, Where Do We Go?", "Don't Smile at Me", "Happier Than Ever", "Everything I Wanted"], answer: 0 },
    { question: "Which of these instruments is NOT typically found in a standard orchestra?", options: ["Trumpet", "Saxophone", "Viola", "Bassoon"], answer: 1 },
    { question: "Which famous opera singer is also known as 'The Pavarotti'?", options: ["Placido Domingo", "Luciano Pavarotti", "Jose Carreras", "Andrea Bocelli"], answer: 1 },
    { question: "Which music streaming service was co-founded by Jay-Z?", options: ["Spotify", "Apple Music", "Tidal", "Pandora"], answer: 2 },
    { question: "Which popular music festival began as a farewell tour for Perry Farrell's band Jane's Addiction?", options: ["Coachella", "Lollapalooza", "Bonnaroo", "Austin City Limits"], answer: 1 },
    { question: "Which singer, songwriter and pianist has had huge hits with 'Rocket Man', 'Tiny Dancer' and 'Your Song'?", options: ["Billy Joel", "Elton John", "Stevie Wonder", "Paul McCartney"], answer: 1 },
    { question: "Who is the lead singer of the band U2?", options: ["The Edge", "Bono", "Adam Clayton", "Larry Mullen Jr."], answer: 1 },
    { question: "What was the name of the iconic music festival held in 1969?", options: ["Monterey Pop Festival", "Isle of Wight Festival", "Woodstock", "Altamont Speedway Free Festival"], answer: 2 },
    { question: "Which composer was deaf for the last 25 years of his life?", options: ["Mozart", "Bach", "Beethoven", "Haydn"], answer: 2 },
    { question: "What is the name of the lead singer of the Rolling Stones?", options: ["Keith Richards", "Mick Jagger", "Charlie Watts", "Ronnie Wood"], answer: 1 },
    { question: "Which artist is known as the 'Godfather of Soul'?", options: ["James Brown", "Ray Charles", "Sam Cooke", "Otis Redding"], answer: 0 },
    { question: "What is the name of the first music video ever played on MTV?", options: ["'Video Killed the Radio Star' by The Buggles", "'Billie Jean' by Michael Jackson", "'Sledgehammer' by Peter Gabriel", "'Take on Me' by a-ha"], answer: 0 },
    { question: "Which band is famous for the album 'The Dark Side of the Moon'?", options: ["Led Zeppelin", "The Who", "Pink Floyd", "Genesis"], answer: 2 },
    { question: "What is the name of the legendary guitarist who was a member of the Yardbirds and Cream?", options: ["Jimmy Page", "Jeff Beck", "Eric Clapton", "Peter Green"], answer: 2 },
    { question: "Which female artist has the most Grammy Awards?", options: ["Beyoncé", "Alison Krauss", "Aretha Franklin", "Taylor Swift"], answer: 0 },
    { question: "What is the term for a composition for a solo instrument accompanied by an orchestra?", options: ["Symphony", "Concerto", "Sonata", "Overture"], answer: 1 },
    { question: "Which hip hop group released the album 'Straight Outta Compton'?", options: ["Public Enemy", "Run-DMC", "N.W.A.", "A Tribe Called Quest"], answer: 2 },
    {
        question: "Which form of Indian music is divided into Hindustani and Carnatic?",
        options: ["Folk", "Classical", "Pop", "Devotional"],
        answer: 1
    },
    {
        question: "Who is known as the 'Nightingale of India'?",
        options: ["Lata Mangeshkar", "Asha Bhosle", "M.S. Subbulakshmi", "K.S. Chithra"],
        answer: 0
    },
    {
        question: "Who is credited with creating the Raaga Miya ki Malhar?",
        options: ["Tansen", "Bhimsen Joshi", "Ravi Shankar", "Bismillah Khan"],
        answer: 0
    },
    {
        question: "Which is the oldest form of composition in Hindustani vocal music?",
        options: ["Khayal", "Dhrupad", "Thumri", "Tarana"],
        answer: 1
    },
    {
        question: "Which instrument is Bismillah Khan associated with?",
        options: ["Sitar", "Tabla", "Shehnai", "Sarod"],
        answer: 2
    },
    {
        question: "Who was the first Indian to win a Grammy Award?",
        options: ["A.R. Rahman", "Ravi Shankar", "Zakir Hussain", "Lata Mangeshkar"],
        answer: 1
    },
    {
        question: "Which classical singer is known for the 'Kirana Gharana'?",
        options: ["Bhimsen Joshi", "Kumar Gandharva", "Amir Khan", "Pandit Jasraj"],
        answer: 0
    },
    {
        question: "How many Thaats are recognized in Hindustani classical music?",
        options: ["7", "10", "12", "14"],
        answer: 1
    },
    {
        question: "Which is a percussion instrument?",
        options: ["Sitar", "Tabla", "Violin", "Flute"],
        answer: 1
    },
    {
        question: "Which instrument is used in Carnatic music?",
        options: ["Mridangam", "Santoor", "Sarangi", "Harmonium"],
        answer: 0
    },
    {
        question: "Dr. M. Balamuralikrishna was a renowned artist of which style?",
        options: ["Hindustani Vocal", "Carnatic Vocal", "Dhrupad", "Carnatic Instrumental"],
        answer: 1
    },
    {
        question: "Who is known as the 'Father of Indian Classical Music'?",
        options: ["Tansen", "Tyagaraja", "Purandara Dasa", "Miyan Tansen"],
        answer: 2
    },
    {
        question: "Which instrument is Ravi Shankar famous for?",
        options: ["Sarod", "Sitar", "Tabla", "Veena"],
        answer: 1
    },
    {
        question: "Who is the famous flautist of India?",
        options: ["Hariprasad Chaurasia", "Zakir Hussain", "Amjad Ali Khan", "Shivkumar Sharma"],
        answer: 0
    },
    {
        question: "Who is the famous Santoor player?",
        options: ["Bismillah Khan", "Shivkumar Sharma", "Ravi Shankar", "Ali Akbar Khan"],
        answer: 1
    },
    {
        question: "Who was awarded Bharat Ratna for her contribution to music?",
        options: ["Asha Bhosle", "M.S. Subbulakshmi", "Shreya Ghoshal", "Sunidhi Chauhan"],
        answer: 1
    },
    {
        question: "Which Gharana is known for slow tempo ragas?",
        options: ["Gwalior", "Kirana", "Agra", "Patiala"],
        answer: 1
    },
    {
        question: "Who is the famous tabla player associated with Ravi Shankar?",
        options: ["Alla Rakha", "Zakir Hussain", "Anindo Chatterjee", "Kumar Bose"],
        answer: 0
    },
    {
        question: "Who is the first female professional tabla player in India?",
        options: ["Anuradha Pal", "Shubha Mudgal", "Girija Devi", "Ashwini Bhide"],
        answer: 0
    },
    {
        question: "Who is known as the 'Queen of Ghazals'?",
        options: ["Begum Akhtar", "Shreya Ghoshal", "Asha Bhosle", "Lata Mangeshkar"],
        answer: 0
    },
    {
        question: "Which is a wind instrument?",
        options: ["Tabla", "Flute", "Sitar", "Veena"],
        answer: 1
    },
    {
        question: "Which instrument is associated with Amjad Ali Khan?",
        options: ["Sarod", "Sitar", "Shehnai", "Violin"],
        answer: 0
    },
    {
        question: "What is the rhythmic cycle in Indian music called?",
        options: ["Raga", "Tala", "Swara", "Laya"],
        answer: 1
    },
    {
        question: "Which is the lowest range of musical note called?",
        options: ["Mandra", "Tara", "Madhya", "Ati Tara"],
        answer: 0
    },
    {
        question: "Which musical instrument is Annapurna Devi associated with?",
        options: ["Sitar", "Sarod", "Surbahar", "Violin"],
        answer: 2
    },
    {
        question: "Which musical instrument is Sandeep Das associated with?",
        options: ["Tabla", "Mridangam", "Sitar", "Sarangi"],
        answer: 0
    },
    {
        question: "Which instrument is used in both Hindustani and Carnatic music?",
        options: ["Veena", "Mridangam", "Tabla", "Santoor"],
        answer: 0
    },
    {
        question: "Which of the following is NOT a percussion instrument?",
        options: ["Tabla", "Mridangam", "Sitar", "Dholak"],
        answer: 2
    },
    {
        question: "Which instrument is called 'Ekanda Veena'?",
        options: ["Bobbili Veena", "Saraswati Veena", "Rudra Veena", "Surbahar"],
        answer: 0
    },
    {
        question: "Which is the stringed instrument with the most strings?",
        options: ["Sitar", "Sarod", "Surbahar", "Santoor"],
        answer: 3
    },
    {
        question: "The folk music 'Powada' is from which Indian state?",
        options: ["Tamil Nadu", "Maharashtra", "Punjab", "Assam"],
        answer: 1
    },
    {
        question: "Khongjom Parba is a folk music genre from which state?",
        options: ["Manipur", "Nagaland", "Mizoram", "Sikkim"],
        answer: 0
    },
    {
        question: "Bhavageete is popular in which states?",
        options: ["Karnataka and Maharashtra", "Gujarat and Rajasthan", "Tamil Nadu and Kerala", "West Bengal and Odisha"],
        answer: 0
    },
    {
        question: "Mando, a blend of Indian and Western music, is popular in which state?",
        options: ["Kerala", "Goa", "Tamil Nadu", "Punjab"],
        answer: 1
    },
    {
        question: "Kolannalu or Kolattam is a folk dance and music from which state?",
        options: ["Andhra Pradesh", "Kerala", "Tamil Nadu", "Karnataka"],
        answer: 0
    },
    {
        question: "The song 'Kesariya Balam' is sung in which style?",
        options: ["Thumri", "Ghazal", "Maand", "Bhajan"],
        answer: 2
    },
    {
        question: "The traditional folk instrument 'Ghumot' is associated with which festival in Goa?",
        options: ["Diwali", "Ganesh Chaturthi", "Holi", "Navratri"],
        answer: 1
    },
    {
        question: "Which community in Rajasthan uses the Kamaicha instrument?",
        options: ["Langha", "Bauls", "Bhopa", "Manganiar or Merasi"],
        answer: 3
    },
    {
        question: "Abhang are devotional songs dedicated to which god?",
        options: ["Jagannatha", "Narayana", "Vitthala", "Vamana"],
        answer: 2
    },
    {
        question: "Which dance form is closely associated with the music of Assam?",
        options: ["Bihu", "Garba", "Lavani", "Yakshagana"],
        answer: 0
    },
    {
        question: "Who composed the music for the film 'Lagaan'?",
        options: ["A.R. Rahman", "Shankar-Ehsaan-Loy", "Anu Malik", "Ismail Darbar"],
        answer: 0
    },
    {
        question: "Which singer is known as the 'King of Playback Singing' in Bollywood?",
        options: ["Mohammed Rafi", "Kishore Kumar", "Mukesh", "Sonu Nigam"],
        answer: 0
    },
    {
        question: "Who is the composer of 'Mile Sur Mera Tumhara'?",
        options: ["R.D. Burman", "Pandit Bhimsen Joshi", "Louis Banks", "Ilaiyaraaja"],
        answer: 2
    },
    {
        question: "Which movie featured the song 'Chaiyya Chaiyya'?",
        options: ["Dil Se", "Bombay", "Roja", "Taal"],
        answer: 0
    },
    {
        question: "Who sang the song 'Jai Ho' from Slumdog Millionaire?",
        options: ["Sonu Nigam", "Sukhwinder Singh", "Shaan", "Kailash Kher"],
        answer: 1
    },
    {
        question: "Which singer is known for the song 'Tunak Tunak Tun'?",
        options: ["Daler Mehndi", "Mika Singh", "Sukhbir", "Badshah"],
        answer: 0
    },
    {
        question: "Who is the music director for the film 'Rockstar'?",
        options: ["Vishal-Shekhar", "A.R. Rahman", "Pritam", "Shankar-Ehsaan-Loy"],
        answer: 1
    },
    {
        question: "Which singer is known as the 'Queen of Indie Pop'?",
        options: ["Alisha Chinai", "Sunidhi Chauhan", "Shreya Ghoshal", "Neha Kakkar"],
        answer: 0
    },
    {
        question: "Who is the composer of 'Vande Mataram' (modern version)?",
        options: ["A.R. Rahman", "R.D. Burman", "Laxmikant-Pyarelal", "Ilaiyaraaja"],
        answer: 0
    },
    {
        question: "Which Bollywood composer duo is known for their work in the 1970s and 80s?",
        options: ["Jatin-Lalit", "Shankar-Jaikishan", "Laxmikant-Pyarelal", "Salim-Sulaiman"],
        answer: 2
    },
    {
        question: "Which percussion instrument is essential in Carnatic concerts?",
        options: ["Tabla", "Mridangam", "Dholak", "Khol"],
        answer: 1
    },
    {
        question: "Which instrument is played by Ustad Zakir Hussain?",
        options: ["Tabla", "Sitar", "Sarod", "Shehnai"],
        answer: 0
    },
    {
        question: "Who is the famous Indian violinist known for Carnatic music?",
        options: ["L. Subramaniam", "Anoushka Shankar", "Amjad Ali Khan", "Hari Prasad Chaurasia"],
        answer: 0
    },
    {
        question: "Which instrument is NOT a string instrument?",
        options: ["Sitar", "Sarod", "Tabla", "Veena"],
        answer: 2
    },
    {
        question: "Which instrument is played using a bow?",
        options: ["Sitar", "Sarangi", "Tabla", "Mridangam"],
        answer: 1
    },
    {
        question: "Who is the famous Sarod maestro of India?",
        options: ["Amjad Ali Khan", "Ravi Shankar", "Shivkumar Sharma", "Zakir Hussain"],
        answer: 0
    },
    {
        question: "Which instrument is commonly used in bhajan singing?",
        options: ["Harmonium", "Sitar", "Sarod", "Santoor"],
        answer: 0
    },
    {
        question: "Who is known for playing the Rudra Veena?",
        options: ["Ustad Asad Ali Khan", "Ravi Shankar", "Bismillah Khan", "Alla Rakha"],
        answer: 0
    },
    {
        question: "Which instrument is associated with the Baul singers of Bengal?",
        options: ["Ektara", "Tabla", "Sitar", "Flute"],
        answer: 0
    },
    {
        question: "Which instrument is NOT used in Hindustani classical music?",
        options: ["Santoor", "Mridangam", "Sarangi", "Shehnai"],
        answer: 1
    },
    {
        question: "Who composed the music for the film 'Dilwale Dulhania Le Jayenge'?",
        options: ["A.R. Rahman", "Jatin-Lalit", "Anu Malik", "Shankar-Ehsaan-Loy"],
        answer: 1
    },
    {
        question: "Which singer holds the Guinness World Record for most recorded songs?",
        options: ["Asha Bhosle", "Lata Mangeshkar", "Kishore Kumar", "Sonu Nigam"],
        answer: 0
    },
    {
        question: "Which music director is known as the 'King of Melody'?",
        options: ["R.D. Burman", "Naushad", "Anu Malik", "Ilaiyaraaja"],
        answer: 1
    },
    {
        question: "Who sang 'Tere Bina Zindagi Se' with Lata Mangeshkar?",
        options: ["Kishore Kumar", "Mukesh", "Kumar Sanu", "Kishore Kumar"],
        answer: 0
    },
    {
        question: "Which composer duo created the song 'Dum Maro Dum'?",
        options: ["Shankar-Jaikishan", "Laxmikant-Pyarelal", "R.D. Burman", "Jatin-Lalit"],
        answer: 2
    },
    {
        question: "Which playback singer is known as 'Disco King'?",
        options: ["Bappi Lahiri", "Kishore Kumar", "S.P. Balasubrahmanyam", "Sonu Nigam"],
        answer: 0
    },
    {
        question: "Who composed the music for 'Kabhi Khushi Kabhie Gham'?",
        options: ["Jatin-Lalit", "Shankar-Ehsaan-Loy", "Anu Malik", "Laxmikant-Pyarelal"],
        answer: 2
    },
    {
        question: "Which singer is famous for the song 'Kal Ho Naa Ho'?",
        options: ["Sonu Nigam", "Shaan", "Udit Narayan", "Kumar Sanu"],
        answer: 0
    },
    {
        question: "Who is known as the 'Queen of Melody'?",
        options: ["Asha Bhosle", "Lata Mangeshkar", "Shreya Ghoshal", "Sunidhi Chauhan"],
        answer: 1
    },
    {
        question: "Who composed 'Choli Ke Peeche Kya Hai'?",
        options: ["Anu Malik", "A.R. Rahman", "Laxmikant-Pyarelal", "R.D. Burman"],
        answer: 2
    },
    {
        question: "Which folk music is popular in Punjab?",
        options: ["Bhangra", "Lavani", "Garba", "Bihu"],
        answer: 0
    },
    {
        question: "Which is a famous folk dance and music of Gujarat?",
        options: ["Bhangra", "Garba", "Lavani", "Bihu"],
        answer: 1
    },
    {
        question: "Which is a devotional music form from Maharashtra?",
        options: ["Abhang", "Baul", "Bhajan", "Qawwali"],
        answer: 0
    },
    {
        question: "Which state is famous for the folk music 'Baul'?",
        options: ["West Bengal", "Punjab", "Maharashtra", "Kerala"],
        answer: 0
    },
    {
        question: "Which musical form is associated with Rajasthan?",
        options: ["Maand", "Bihu", "Garba", "Lavani"],
        answer: 0
    },
    {
        question: "Which is a folk percussion instrument from Assam?",
        options: ["Dhol", "Mridangam", "Tabla", "Khol"],
        answer: 0
    },
    {
        question: "Which is a traditional music form of Kerala?",
        options: ["Sopana Sangeetham", "Baul", "Bihu", "Maand"],
        answer: 0
    },
    {
        question: "Which is a popular folk song of Uttar Pradesh?",
        options: ["Kajri", "Bihu", "Garba", "Lavani"],
        answer: 0
    },
    {
        question: "Which is a devotional music style from Tamil Nadu?",
        options: ["Thevaram", "Bhajan", "Qawwali", "Lavani"],
        answer: 0
    },
    {
        question: "Which is a folk dance and music from Andhra Pradesh?",
        options: ["Kolattam", "Garba", "Bihu", "Lavani"],
        answer: 0
    },
    {
        question: "Who is known as the 'Rap King' of India?",
        options: ["Badshah", "Raftaar", "Yo Yo Honey Singh", "Divine"],
        answer: 2
    },
    {
        question: "Which singer is famous for 'Kala Chashma'?",
        options: ["Neha Kakkar", "Badshah", "Arijit Singh", "Shreya Ghoshal"],
        answer: 1
    },
    {
        question: "Who is the composer of 'Tum Hi Ho'?",
        options: ["A.R. Rahman", "Mithoon", "Pritam", "Vishal-Shekhar"],
        answer: 1
    },
    {
        question: "Which singer is known for the song 'Channa Mereya'?",
        options: ["Arijit Singh", "Armaan Malik", "Atif Aslam", "Shaan"],
        answer: 0
    },
    {
        question: "Who composed 'Ae Dil Hai Mushkil'?",
        options: ["A.R. Rahman", "Pritam", "Shankar-Ehsaan-Loy", "Vishal Bhardwaj"],
        answer: 1
    },
    {
        question: "Which singer is known for 'Dilbar'?",
        options: ["Neha Kakkar", "Shreya Ghoshal", "Sunidhi Chauhan", "Tulsi Kumar"],
        answer: 0
    },
    {
        question: "Who is the music director for 'Barfi!'?",
        options: ["Pritam", "A.R. Rahman", "Vishal-Shekhar", "Shankar-Ehsaan-Loy"],
        answer: 0
    },
    {
        question: "Which singer is known for the song 'Bekhayali'?",
        options: ["Arijit Singh", "Armaan Malik", "Sachet Tandon", "Shaan"],
        answer: 2
    },
    {
        question: "Who is the composer of 'Kabira' from 'Yeh Jawaani Hai Deewani'?",
        options: ["Pritam", "Amit Trivedi", "Vishal-Shekhar", "Shankar-Ehsaan-Loy"],
        answer: 0
    },
    {
        question: "Which singer is known for 'Tera Ban Jaunga'?",
        options: ["Akhil Sachdeva", "Arijit Singh", "Sachet Tandon", "Jubin Nautiyal"],
        answer: 0
    },
    {
        question: "Who is the first Indian woman to win a Grammy Award?",
        options: ["Anoushka Shankar", "Tanvi Shah", "Lata Mangeshkar", "Shreya Ghoshal"],
        answer: 1
    },
    {
        question: "Which Indian musician is known for fusion music?",
        options: ["Ravi Shankar", "Zakir Hussain", "Shankar Mahadevan", "A.R. Rahman"],
        answer: 3
    },
    {
        question: "Who is the famous Dhrupad singer?",
        options: ["Gundecha Brothers", "Kumar Gandharva", "Pandit Jasraj", "Amir Khan"],
        answer: 0
    },
    {
        question: "Which award is given for excellence in Indian classical music?",
        options: ["Padma Shri", "Sangeet Natak Akademi Award", "Bharat Ratna", "Filmfare Award"],
        answer: 1
    },
    {
        question: "Who is known for the 'Gayaki Ang' style of sitar playing?",
        options: ["Vilayat Khan", "Ravi Shankar", "Anoushka Shankar", "Nikhil Banerjee"],
        answer: 0
    },
    {
        question: "Which musician is associated with the Maihar Gharana?",
        options: ["Ravi Shankar", "Bismillah Khan", "Amjad Ali Khan", "Zakir Hussain"],
        answer: 0
    },
    {
        question: "Who is the famous Carnatic vocalist known as 'Gana Gandharva'?",
        options: ["M. Balamuralikrishna", "K.J. Yesudas", "Semmangudi Srinivasa Iyer", "M.S. Subbulakshmi"],
        answer: 1
    },
    {
        question: "Which award is India's highest civilian award for artists?",
        options: ["Padma Shri", "Padma Bhushan", "Padma Vibhushan", "Bharat Ratna"],
        answer: 3
    },
    {
        question: "Who is the famous Indian Sufi singer known for 'Khwaja Mere Khwaja'?",
        options: ["Kailash Kher", "Rahat Fateh Ali Khan", "A.R. Rahman", "Nusrat Fateh Ali Khan"],
        answer: 2
    },
    {
        question: "Which Indian musician collaborated with The Beatles?",
        options: ["Ravi Shankar", "Zakir Hussain", "Anoushka Shankar", "Hari Prasad Chaurasia"],
        answer: 0
    },
    {
        question: "Which Indian musician is known as 'King of Ghazals'?",
        options: ["Jagjit Singh", "Ghulam Ali", "Talat Mahmood", "Pankaj Udhas"],
        answer: 0
    },
    {
        question: "Which is the main percussion instrument in Qawwali?",
        options: ["Tabla", "Dholak", "Mridangam", "Pakhawaj"],
        answer: 1
    },
    {
        question: "Who is the famous Bollywood music composer trio?",
        options: ["Shankar-Ehsaan-Loy", "Jatin-Lalit", "Laxmikant-Pyarelal", "Vishal-Shekhar"],
        answer: 0
    },
    {
        question: "Which is a popular devotional music form in North India?",
        options: ["Qawwali", "Carnatic", "Dhrupad", "Lavani"],
        answer: 0
    },
    {
        question: "Who is the famous Indian female playback singer from Kerala?",
        options: ["K.S. Chithra", "Shreya Ghoshal", "Sunidhi Chauhan", "Asha Bhosle"],
        answer: 0
    },
    {
        question: "Which is a famous music festival in Chennai?",
        options: ["Sankat Mochan", "Thyagaraja Aradhana", "Saptak", "Dover Lane"],
        answer: 1
    },
    {
        question: "Who is known as the 'Mozart of Madras'?",
        options: ["A.R. Rahman", "Ilaiyaraaja", "Yuvan Shankar Raja", "Harris Jayaraj"],
        answer: 0
    },
    {
        question: "Which music composer is known for background scores in Tamil cinema?",
        options: ["Ilaiyaraaja", "A.R. Rahman", "Deva", "Vidyasagar"],
        answer: 0
    },
    {
        question: "Which Indian music form is performed during Holi?",
        options: ["Kajri", "Chaiti", "Dhamar", "Thumri"],
        answer: 2
    },
    {
        question: "Which is a famous music reality show in India?",
        options: ["Indian Idol", "Sa Re Ga Ma Pa", "The Voice", "All of these"],
        answer: 3
    },
    {
        question: "Which music is performed in Vaishnav temples of Gujarat?",
        options: ["Bhajan", "Garba", "Haveli Sangeet", "Maand"],
        answer: 2
    },
    {
        question: "Who is the famous Assamese singer known for 'Bihu' songs?",
        options: ["Bhupen Hazarika", "Zubeen Garg", "Papon", "Kalpana Patowary"],
        answer: 0
    },
    {
        question: "Which is a popular devotional song form in Bengal?",
        options: ["Baul", "Kirtan", "Qawwali", "Abhang"],
        answer: 1
    },
    {
        question: "Which is a famous Marathi folk song form?",
        options: ["Lavani", "Bihu", "Garba", "Maand"],
        answer: 0
    },
    {
        question: "Which is a Tamil devotional music form?",
        options: ["Thevaram", "Bhajan", "Qawwali", "Lavani"],
        answer: 0
    },
    {
        question: "Which is a folk music form of Odisha?",
        options: ["Dalkhai", "Bihu", "Lavani", "Garba"],
        answer: 0
    },
    {
        question: "Which is a traditional music form of Kashmir?",
        options: ["Sufiana Kalam", "Baul", "Maand", "Bihu"],
        answer: 0
    },
    {
        question: "Which is a devotional music form of Rajasthan?",
        options: ["Bhajan", "Maand", "Qawwali", "Haveli Sangeet"],
        answer: 3
    },
    {
        question: "Which is a famous music festival in Kolkata?",
        options: ["Dover Lane Music Conference", "Saptak", "Thyagaraja Aradhana", "Sankat Mochan"],
        answer: 0
    },
    {
        question: "Which is a traditional music form of Kerala temples?",
        options: ["Sopana Sangeetham", "Lavani", "Bihu", "Baul"],
        answer: 0
    },
    {
        question: "Who is the music composer for the film 'Dil Se'?",
        options: ["A.R. Rahman", "Anu Malik", "Vishal Bhardwaj", "Pritam"],
        answer: 0
    },
    {
        question: "Which singer is known for 'Suraj Hua Maddham'?",
        options: ["Sonu Nigam", "Shaan", "Udit Narayan", "Kumar Sanu"],
        answer: 0
    },
    {
        question: "Who is the composer duo for 'Kabhi Kabhi'?",
        options: ["Shankar-Jaikishan", "Kalyanji-Anandji", "Laxmikant-Pyarelal", "Jatin-Lalit"],
        answer: 3
    },
    {
        question: "Which singer is famous for the song 'Tera Ban Jaunga'?",
        options: ["Akhil Sachdeva", "Arijit Singh", "Sachet Tandon", "Jubin Nautiyal"],
        answer: 0
    },
    {
        question: "Who is the composer of 'Tum Mile'?",
        options: ["Pritam", "A.R. Rahman", "Mithoon", "Vishal-Shekhar"],
        answer: 2
    },
    {
        question: "Who sang 'Sun Saathiya' from ABCD 2?",
        options: ["Shreya Ghoshal", "Neha Kakkar", "Tulsi Kumar", "Palak Muchhal"],
        answer: 0
    },
    {
        question: "Who is the composer for 'Ae Watan' from Raazi?",
        options: ["Shankar-Ehsaan-Loy", "A.R. Rahman", "Pritam", "Vishal Bhardwaj"],
        answer: 3
    },
    {
        question: "Which singer is known for the song 'Tera Yaar Hoon Main'?",
        options: ["Arijit Singh", "Jubin Nautiyal", "Shaan", "Atif Aslam"],
        answer: 0
    },
    {
        question: "Who composed the music for 'Kalank'?",
        options: ["Pritam", "Amit Trivedi", "A.R. Rahman", "Vishal-Shekhar"],
        answer: 0
    },
    {
        question: "Who is known as the 'King of Romantic Songs' in Bollywood?",
        options: ["Kumar Sanu", "Sonu Nigam", "Arijit Singh", "Udit Narayan"],
        answer: 2
    },
    {
        question: "Which singer is famous for the song 'Vaaste'?",
        options: ["Dhvani Bhanushali", "Neha Kakkar", "Tulsi Kumar", "Shreya Ghoshal"],
        answer: 0
    },
    {
        question: "Who is the composer of 'Apna Time Aayega'?",
        options: ["Divine", "Ranveer Singh", "Ankur Tewari", "Naezy"],
        answer: 2
    },
    {
        question: "Which singer is known for the song 'Tum Hi Aana'?",
        options: ["Jubin Nautiyal", "Arijit Singh", "Sachet Tandon", "Atif Aslam"],
        answer: 0
    },
    {
        question: "Who is the composer of 'Bekhayali' from Kabir Singh?",
        options: ["Amit Trivedi", "Sachet-Parampara", "Pritam", "Vishal-Shekhar"],
        answer: 1
    },
    {
        question: "Which singer is famous for 'Tareefan'?",
        options: ["Badshah", "Armaan Malik", "Arijit Singh", "Akhil"],
        answer: 0
    },
    {
        question: "Who is the composer for 'Channa Mereya'?",
        options: ["Amit Trivedi", "Pritam", "A.R. Rahman", "Vishal Bhardwaj"],
        answer: 1
    },
    {
        question: "Which singer is known for the song 'Tera Ghata'?",
        options: ["Gajendra Verma", "Armaan Malik", "Neha Kakkar", "Jubin Nautiyal"],
        answer: 0
    },
    {
        question: "Who is the composer for 'Dil Diyan Gallan'?",
        options: ["Vishal-Shekhar", "Pritam", "A.R. Rahman", "Shankar-Ehsaan-Loy"],
        answer: 0
    },
    {
        question: "Which singer is famous for 'Leja Re'?",
        options: ["Dhvani Bhanushali", "Tulsi Kumar", "Neha Kakkar", "Shreya Ghoshal"],
        answer: 0
    },
    {
        question: "Who is the composer for 'Tujhe Kitna Chahne Lage'?",
        options: ["Arijit Singh", "Mithoon", "Pritam", "Amit Trivedi"],
        answer: 1
    }
];
const storageKey = "usedMusicIndices";

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

let usedIndices = [];

function loadUsedIndices() {
    const data = localStorage.getItem(storageKey);
    if (data) usedIndices = JSON.parse(data);
    else usedIndices = [];
}

function saveUsedIndices() {
    localStorage.setItem(storageKey, JSON.stringify(usedIndices));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    loadUsedIndices();
    let availableIndices = [];
    for (let i = 0; i < questions.length; i++) {
        if (!usedIndices.includes(i)) availableIndices.push(i);
    }
    if (availableIndices.length < QUESTIONS_PER_ROUND) {
        usedIndices = [];
        availableIndices = Array.from({ length: questions.length }, (_, i) => i);
    }
    shuffle(availableIndices);
    currentQuestions = availableIndices.slice(0, QUESTIONS_PER_ROUND).map(i => ({ ...questions[i], index: i }));
    currentQuestionIndex = 0;
    score = 0;
    coins = 0;
    usedIndices = usedIndices.concat(currentQuestions.map(q => q.index));
    saveUsedIndices();
    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} of ${QUESTIONS_PER_ROUND}`;
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = 'option-btn';
        btn.onclick = () => selectOption(idx);
        optionsDiv.appendChild(btn);
    });
    document.getElementById('next-btn').disabled = true;
}

const optionButtons = document.querySelectorAll('.option-btn');
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        optionButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});
document.getElementById('next-btn').disabled = true;

function selectOption(selectedIdx) {
    const q = currentQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) btn.classList.add('correct');
        if (idx === selectedIdx && idx !== q.answer) btn.classList.add('incorrect');
    });
    if (selectedIdx === q.answer) {
        score++;
        coins += 10;
    }
    document.getElementById('next-btn').disabled = false;
}

const nextSound = new Audio('268108__nenadsimic__button-tick.wav'); // or 'sounds/next.wav' if in a folder

function playNextSound() {
    nextSound.currentTime = 0; // rewind to start if played rapidly
    nextSound.play();
}

function nextQuestion() {
    playNextSound();
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS_PER_ROUND) {
        showQuestion();
    } else {
        showResults();
    }
}

const quizEndSound = new Audio('391539__unlistenable__electro-win-sound.wav');

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'flex';
    document.getElementById('score').textContent = `Your Score: ${score} / ${QUESTIONS_PER_ROUND}`;

    let highestScore = localStorage.getItem('highestScore') || 0;
    highestScore = parseInt(highestScore, 10);

    // Update highest score if current score is higher
    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem('highestScore', highestScore);
    }

    // Display highest score
    let highestScoreEl = document.getElementById('highest-score');
    if (!highestScoreEl) {
        // Create the element if it doesn't exist
        highestScoreEl = document.createElement('p');
        highestScoreEl.id = 'highest-score';
        document.getElementById('result-container').querySelector('.result-content').appendChild(highestScoreEl);
    }
    highestScoreEl.textContent = `Highest Score: ${highestScore} / ${QUESTIONS_PER_ROUND}`;

    quizEndSound.currentTime = 0;
    quizEndSound.play();
}

function restartQuiz() {
    loadUsedIndices();
    if (usedIndices.length >= QUESTIONS_PER_ROUND) {
        usedIndices.splice(-QUESTIONS_PER_ROUND, QUESTIONS_PER_ROUND);
        saveUsedIndices();
    }
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startQuiz();
}

window.onload = startQuiz;