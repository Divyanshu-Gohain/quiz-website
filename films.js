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
    { question: "Who directed the film 'Pulp Fiction'?", options: ["Quentin Tarantino", "Martin Scorsese", "Christopher Nolan", "Steven Spielberg"], answer: 0 },
    { question: "Which actor played James Bond in 'Casino Royale' (2006)?", options: ["Pierce Brosnan", "Sean Connery", "Daniel Craig", "Roger Moore"], answer: 2 },
    { question: "In what year was the first 'Star Wars' movie released?", options: ["1975", "1977", "1980", "1983"], answer: 1 },
    { question: "Who played the character of Jack Dawson in 'Titanic'?", options: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Tom Cruise"], answer: 1 },
    { question: "Which film won the Academy Award for Best Picture in 2020?", options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"], answer: 0 },
    { question: "Who directed 'The Lord of the Rings' trilogy?", options: ["Peter Jackson", "James Cameron", "Ridley Scott", "Guillermo del Toro"], answer: 0 },
    { question: "Which actress played the role of Hermione Granger in the 'Harry Potter' films?", options: ["Emma Roberts", "Emma Watson", "Saoirse Ronan", "Elle Fanning"], answer: 1 },
    { question: "What is the highest-grossing film of all time (unadjusted for inflation)?", options: ["Avatar", "Titanic", "Avengers: Endgame", "Star Wars: The Force Awakens"], answer: 2 },
    { question: "Who composed the score for the film 'Inception'?", options: ["Hans Zimmer", "John Williams", "Ennio Morricone", "Alan Silvestri"], answer: 0 },
    { question: "Which movie features the quote 'May the Force be with you'?", options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Spaceballs"], answer: 1 },
    { question: "Who directed 'The Shawshank Redemption'?", options: ["Frank Darabont", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"], answer: 0 },
    { question: "In which film did Marlon Brando famously say 'I'm going to make him an offer he can't refuse'?", options: ["Apocalypse Now", "A Streetcar Named Desire", "The Godfather", "Last Tango in Paris"], answer: 2 },
    { question: "Which actor played the Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Heath Ledger", "Joaquin Phoenix", "Jared Leto"], answer: 1 },
    { question: "What year was 'Back to the Future' released?", options: ["1983", "1985", "1987", "1989"], answer: 1 },
    { question: "Who directed 'Jurassic Park'?", options: ["James Cameron", "George Lucas", "Steven Spielberg", "Robert Zemeckis"], answer: 2 },
    { question: "Which actress won an Oscar for her role in 'La La Land'?", options: ["Emma Stone", "Natalie Portman", "Meryl Streep", "Jennifer Lawrence"], answer: 0 },
    { question: "What is the name of the fictional African country in 'Black Panther'?", options: ["Zamunda", "Wakanda", "Genovia", "Naboo"], answer: 1 },
    { question: "Who played Neo in 'The Matrix'?", options: ["Brad Pitt", "Keanu Reeves", "Will Smith", "Tom Cruise"], answer: 1 },
    { question: "Which film features the song 'My Heart Will Go On'?", options: ["The Bodyguard", "Dirty Dancing", "Titanic", "Armageddon"], answer: 2 },
    { question: "Who directed 'Goodfellas'?", options: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Sergio Leone"], answer: 1 },
    { question: "What is the name of the island in 'Jurassic Park'?", options: ["Isla Sorna", "Isla Nublar", "Skull Island", "Monster Island"], answer: 1 },
    { question: "Who played Tony Stark in the 'Iron Man' movies?", options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Hemsworth"], answer: 1 },
    { question: "Which director is known for films like 'Fight Club' and 'Seven'?", options: ["David Fincher", "Christopher Nolan", "Darren Aronofsky", "Denis Villeneuve"], answer: 0 },
    { question: "What is the name of the spaceship in '2001: A Space Odyssey'?", options: ["Discovery One", "Nostromo", "Millennium Falcon", "Enterprise"], answer: 0 },
    { question: "Who played the role of Lisbeth Salander in 'The Girl with the Dragon Tattoo' (original Swedish film)?", options: ["Noomi Rapace", "Rooney Mara", "Scarlett Johansson", "Kristen Stewart"], answer: 0 },
    { question: "Which movie features a character named Forrest Gump?", options: ["Cast Away", "Saving Private Ryan", "Forrest Gump", "The Green Mile"], answer: 2 },
    { question: "Who directed 'E.T. the Extra-Terrestrial'?", options: ["George Lucas", "Robert Zemeckis", "Steven Spielberg", "James Cameron"], answer: 2 },
    { question: "In what year was 'The Lion King' released?", options: ["1992", "1994", "1996", "1998"], answer: 1 },
    { question: "Which actor played Hannibal Lecter in 'The Silence of the Lambs'?", options: ["Anthony Hopkins", "Brian Cox", "Mads Mikkelsen", "Gary Oldman"], answer: 0 },
    { question: "Who directed 'Schindler's List'?", options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Francis Ford Coppola"], answer: 2 },
    { question: "What is the name of the main character in 'Mad Max: Fury Road'?", options: ["Max Rockatansky", "John Wick", "Ethan Hunt", "James Bond"], answer: 0 },
    { question: "Which film features the line 'Here's looking at you, kid'?", options: ["Casablanca", "The Maltese Falcon", "Citizen Kane", "The Big Sleep"], answer: 0 },
    { question: "Who played the role of Tyler Durden in 'Fight Club'?", options: ["Brad Pitt", "Edward Norton", "Matt Damon", "Leonardo DiCaprio"], answer: 0 },
    { question: "Which movie is about a group of friends planning a bachelor party in Las Vegas?", options: ["Bridesmaids", "The Hangover", "Wedding Crashers", "American Pie"], answer: 1 },
    { question: "Who directed 'The Grand Budapest Hotel'?", options: ["Wes Anderson", "Tim Burton", "Spike Jonze", "Michel Gondry"], answer: 0 },
    { question: "Which actress played Katniss Everdeen in 'The Hunger Games' films?", options: ["Jennifer Lawrence", "Shailene Woodley", "Emma Watson", "Dakota Fanning"], answer: 0 },
    { question: "What is the name of the animated fish in 'Finding Nemo'?", options: ["Marlin", "Nemo", "Dory", "Gill"], answer: 1 },
    { question: "Who directed 'The Social Network'?", options: ["David Fincher", "Aaron Sorkin", "Ben Affleck", "Christopher Nolan"], answer: 0 },
    { question: "Which film features the song 'Shallow'?", options: ["A Star is Born", "Bohemian Rhapsody", "The Greatest Showman", "La La Land"], answer: 0 },
    { question: "Who played Captain Jack Sparrow in the 'Pirates of the Caribbean' movies?", options: ["Orlando Bloom", "Johnny Depp", "Geoffrey Rush", "Keira Knightley"], answer: 1 },
    { question: "What is the name of the main character in 'The Wolf of Wall Street'?", options: ["Jordan Belfort", "Gordon Gekko", "Patrick Bateman", "Sherlock Holmes"], answer: 0 },
    { question: "Which film is known for its use of stop-motion animation and features characters like Jack Skellington?", options: ["Coraline", "ParaNorman", "The Nightmare Before Christmas", "Corpse Bride"], answer: 2 },
    { question: "Who directed 'Arrival'?", options: ["Denis Villeneuve", "Christopher Nolan", "Ridley Scott", "James Cameron"], answer: 0 },
    { question: "Which actor played the role of Gandalf in 'The Lord of the Rings'?", options: ["Ian McKellen", "Christopher Lee", "Sean Bean", "Viggo Mortensen"], answer: 0 },
    { question: "What is the name of the company in the 'Alien' franchise?", options: ["Weyland-Yutani", "Umbrella Corporation", "Cyberdyne Systems", "Oscorp"], answer: 0 },
    { question: "Who directed 'Pans Labyrinth'?", options: ["Guillermo del Toro", "Alfonso Cuarón", "Alejandro G. Iñárritu", "Bong Joon-ho"], answer: 0 },
    { question: "Which film features the line 'I see dead people'?", options: ["The Sixth Sense", "The Others", "Poltergeist", "Insidious"], answer: 0 },
    { question: "Who played the role of Mia Wallace in 'Pulp Fiction'?", options: ["Uma Thurman", "Cameron Diaz", "Rosario Dawson", "Jennifer Aniston"], answer: 0 },
    { question: "What is the name of the main character in 'Taxi Driver'?", options: ["Travis Bickle", "Jake LaMotta", "Vito Corleone", "Raging Bull"], answer: 0 },
    { question: "Who played the lead role in the movie 'Cast Away'?", options: ["Tom Hanks", "Brad Pitt", "Matt Damon", "Leonardo DiCaprio"], answer: 0 },
    { question: "Which movie features the character 'Ferris Bueller'?", options: ["Ferris Bueller's Day Off", "The Breakfast Club", "Sixteen Candles", "Weird Science"], answer: 0 },
    { question: "Who directed the film 'Inglourious Basterds'?", options: ["Quentin Tarantino", "Steven Spielberg", "Martin Scorsese", "Guy Ritchie"], answer: 0 },
    { question: "Which actress played the role of Black Widow in the Marvel Cinematic Universe?", options: ["Scarlett Johansson", "Elizabeth Olsen", "Brie Larson", "Natalie Portman"], answer: 0 },
    { question: "What is the name of the kingdom in the movie 'Frozen'?", options: ["Arendelle", "Corona", "DunBroch", "Atlantica"], answer: 0 },
    { question: "Which actor played the Joker in the 2019 film 'Joker'?", options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"], answer: 0 },
    { question: "Who played the character of Forrest Gump?", options: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Michael Clarke Duncan"], answer: 0 },
    { question: "Which film features the song 'Let It Go'?", options: ["Frozen", "Moana", "Tangled", "Brave"], answer: 0 },
    { question: "Who directed the movie 'The Revenant'?", options: ["Alejandro González Iñárritu", "Christopher Nolan", "David Fincher", "Martin Scorsese"], answer: 0 },
    { question: "Which 2008 film features a villain called the Joker?", options: ["The Dark Knight", "Iron Man", "Hancock", "Quantum of Solace"], answer: 0 },
    { question: "Who played the role of Katniss Everdeen in 'The Hunger Games'?", options: ["Jennifer Lawrence", "Shailene Woodley", "Emma Watson", "Kristen Stewart"], answer: 0 },
    { question: "Which film features the quote 'Frankly, my dear, I don't give a damn'?", options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "Rebecca"], answer: 0 },
    { question: "Who directed the movie 'Gravity'?", options: ["Alfonso Cuarón", "Alejandro González Iñárritu", "Guillermo del Toro", "James Cameron"], answer: 0 },
    { question: "Which actor played the role of Iron Man?", options: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"], answer: 0 },
    { question: "Who played the character of Andy Dufresne in 'The Shawshank Redemption'?", options: ["Tim Robbins", "Morgan Freeman", "Kevin Spacey", "Tom Hanks"], answer: 0 },
    { question: "Which movie is about a man who ages in reverse?", options: ["The Curious Case of Benjamin Button", "Big", "Memento", "The Time Traveler's Wife"], answer: 0 },
    { question: "Who directed the film 'The Grand Budapest Hotel'?", options: ["Wes Anderson", "Tim Burton", "Noah Baumbach", "Paul Thomas Anderson"], answer: 0 },
    { "question": "In the movie 'Lagaan', what is the name of the main protagonist, played by Aamir Khan?", "options": ["Bhuvan", "Lakha", "Deva", "Arjan"], "answer": 0 },
    { "question": "Who directed the critically acclaimed film 'Dil Chahta Hai'?", "options": ["Karan Johar", "Farhan Akhtar", "Zoya Akhtar", "Aditya Chopra"], "answer": 1 },
    { "question": "Which actress played the role of 'Geet' in the movie 'Jab We Met'?", "options": ["Priyanka Chopra", "Kareena Kapoor", "Katrina Kaif", "Deepika Padukone"], "answer": 1 },
    { "question": "What is the iconic dialogue of Amjad Khan's character 'Gabbar Singh' in 'Sholay'?", "options": ["Kitne aadmi the?", "Don ko pakadna mushkil hi nahi, namumkin hai", "Mogambo khush hua", "Main aur meri tanhai"], "answer": 0 },
    { "question": "Which movie is based on the life of the Indian athlete Milkha Singh?", "options": ["Paan Singh Tomar", "Mary Kom", "Bhaag Milkha Bhaag", "Dangal"], "answer": 2 },
    { "question": "Who composed the music for the film 'Dilwale Dulhania Le Jayenge'?", "options": ["Anu Malik", "Jatin-Lalit", "Nadeem-Shravan", "A. R. Rahman"], "answer": 1 },
    { "question": "In '3 Idiots', what is the real name of the character 'Rancho'?", "options": ["Phunsukh Wangdu", "Ranchhoddas Chanchad", "Chatur Ramalingam", "Viru Sahastrabuddhe"], "answer": 0 },
    { "question": "Which was the first Indian film to be nominated for an Academy Award in the Best Foreign Language Film category?", "options": ["Salaam Bombay!", "Lagaan", "Mother India", "Gandhi"], "answer": 2 },
    { "question": "Who played the dual roles of 'Seeta' and 'Geeta' in the 1972 film of the same name?", "options": ["Hema Malini", "Rekha", "Sridevi", "Madhuri Dixit"], "answer": 0 },
    { "question": "What is the profession of Shah Rukh Khan's character, 'Mohan Bhargav', in the movie 'Swades'?", "options": ["Scientist at NASA", "Doctor", "Teacher", "Lawyer"], "answer": 0 },
    { "question": "Which film marked the acting debut of Hrithik Roshan?", "options": ["Fiza", "Kaho Naa... Pyaar Hai", "Mission Kashmir", "Yaadein"], "answer": 1 },
    { "question": "In 'Gangs of Wasseypur', who is the arch-nemesis of Sardar Khan?", "options": ["Ramadhir Singh", "Sultan", "Definite", "Faizal Khan"], "answer": 0 },
    { "question": "The song 'Chaiyya Chaiyya' was filmed on top of a moving train for which movie?", "options": ["Dil Se..", "Satya", "Company", "Rangeela"], "answer": 0 },
    { "question": "Who directed the classic comedy 'Andaz Apna Apna'?", "options": ["David Dhawan", "Rajkumar Santoshi", "Priyadarshan", "Subhash Ghai"], "answer": 1 },
    { "question": "Which actress is popularly known as the 'Dhak Dhak Girl' of Bollywood?", "options": ["Sridevi", "Madhuri Dixit", "Juhi Chawla", "Karisma Kapoor"], "answer": 1 },
    { "question": "What is the name of the alien in the movie 'Koi... Mil Gaya'?", "options": ["Jadoo", "Om", "P.K.", "Rohit"], "answer": 0 },
    { "question": "The story of 'Bajrangi Bhaijaan' revolves around taking a young girl back to her home in which country?", "options": ["Bangladesh", "Nepal", "Pakistan", "Afghanistan"], "answer": 2 },
    { "question": "Who played the role of the antagonist 'Alauddin Khilji' in the film 'Padmaavat'?", "options": ["Shahid Kapoor", "Ranveer Singh", "Jim Sarbh", "Aditya Roy Kapur"], "answer": 1 },
    { "question": "Which of these films was India's official entry to the Oscars in 2024?", "options": ["Gully Boy", "Jallikattu", "Chhello Show", "2018"], "answer": 3 },
    { "question": "What is the name of Kareena Kapoor's character in 'Kabhi Khushi Kabhie Gham...'?", "options": ["Anjali", "Pooja", "Naina", "Sanjana"], "answer": 1 },
    { "question": "Who directed the film 'Black', starring Amitabh Bachchan and Rani Mukerji?", "options": ["Karan Johar", "Sanjay Leela Bhansali", "Vidhu Vinod Chopra", "Rakeysh Omprakash Mehra"], "answer": 1 },
    { "question": "The movie 'Taare Zameen Par' deals with which learning disorder?", "options": ["Dyslexia", "ADHD", "Autism", "Dyscalculia"], "answer": 0 },
    { "question": "In 'Queen', where does Rani, played by Kangana Ranaut, go for her solo honeymoon?", "options": ["Paris and Amsterdam", "London and Rome", "Switzerland and Italy", "Spain and Greece"], "answer": 0 },
    { "question": "Which actor played the role of 'Munna Bhai' in the 'Munna Bhai' film series?", "options": ["Arshad Warsi", "Boman Irani", "Sanjay Dutt", "Jimmy Sheirgill"], "answer": 2 },
    { "question": "The film 'Barfi!' is set in which picturesque Indian city?", "options": ["Shimla", "Darjeeling", "Ooty", "Manali"], "answer": 1 },
    { "question": "Who won the National Film Award for Best Actress for her role in 'The Dirty Picture'?", "options": ["Priyanka Chopra", "Kareena Kapoor", "Vidya Balan", "Kangana Ranaut"], "answer": 2 },
    { "question": "Which movie features the song 'Tujhe Dekha Toh Yeh Jaana Sanam'?", "options": ["Dilwale Dulhania Le Jayenge", "Kuch Kuch Hota Hai", "Dil To Pagal Hai", "Mohabbatein"], "answer": 0 },
    { "question": "Who is the director of the critically acclaimed film 'Masaan'?", "options": ["Anurag Kashyap", "Neeraj Ghaywan", "Vikramaditya Motwane", "Zoya Akhtar"], "answer": 1 },
    { "question": "What is the profession of Irrfan Khan's character in 'The Lunchbox'?", "options": ["Accountant", "Government Officer", "Chef", "Postman"], "answer": 0 },
    { "question": "In 'Chak De! India', what is the name of the Indian Women's Hockey team captain?", "options": ["Komal Chautala", "Preeti Sabarwal", "Vidya Sharma", "Bindia Naik"], "answer": 2 },
    { "question": "Which was the first full-length Indian feature film?", "options": ["Alam Ara", "Raja Harishchandra", "Kisan Kanya", "Nala Damayanti"], "answer": 1 },
    { "question": "Who played the role of 'Circuit' in the 'Munna Bhai' series?", "options": ["Sanjay Dutt", "Boman Irani", "Arshad Warsi", "Jimmy Sheirgill"], "answer": 2 },
    { "question": "The movie 'Anand' features the iconic dialogue 'Babumoshai, zindagi badi honi chahiye, lambi nahi'. Who delivered this dialogue?", "options": ["Rajesh Khanna", "Amitabh Bachchan", "Dharmendra", "Rishi Kapoor"], "answer": 0 },
    { "question": "Which of these films is NOT directed by Zoya Akhtar?", "options": ["Zindagi Na Milegi Dobara", "Gully Boy", "Dil Dhadakne Do", "Wake Up Sid"], "answer": 3 },
    { "question": "What is the real name of the actor popularly known as 'Jeetendra'?", "options": ["Ravi Kapoor", "Rajiv Bhatia", "Vishal Devgan", "Gaurav Chanana"], "answer": 0 },
    { "question": "The film 'Piku' explores the relationship between a father and daughter, played by Amitabh Bachchan and which actress?", "options": ["Priyanka Chopra", "Kangana Ranaut", "Anushka Sharma", "Deepika Padukone"], "answer": 3 },
    { "question": "Who composed the memorable soundtrack for the movie 'Rockstar'?", "options": ["Pritam", "Shankar-Ehsaan-Loy", "A. R. Rahman", "Amit Trivedi"], "answer": 2 },
    { "question": "In the movie 'English Vinglish', what does Sridevi's character Shashi enroll in classes for?", "options": ["Cooking", "Dancing", "English Speaking", "Driving"], "answer": 2 },
    { "question": "Which actor is famous for his 'Garam Dharam' persona?", "options": ["Sanjay Dutt", "Sunny Deol", "Dharmendra", "Anil Kapoor"], "answer": 2 },
    { "question": "The movie 'Pink' revolves around which important social issue?", "options": ["Domestic Violence", "Acid Attacks", "Consent", "Honour Killing"], "answer": 2 },
    { "question": "Who won the Filmfare Award for Best Director for '3 Idiots'?", "options": ["Anurag Kashyap", "Rakeysh Omprakash Mehra", "Rajkumar Hirani", "Karan Johar"], "answer": 2 },
    { "question": "In 'My Name Is Khan', Shah Rukh Khan's character Rizwan suffers from which syndrome?", "options": ["Tourette Syndrome", "Asperger's Syndrome", "Down Syndrome", "Obsessive-Compulsive Disorder"], "answer": 1 },
    { "question": "Which of these is a famous dialogue from the movie 'Deewaar'?", "options": ["Mere paas maa hai", "Rishte mein toh hum tumhare baap lagte hain", "Don ka intezaar toh gyarah mulkon ki police kar rahi hai", "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai?"], "answer": 0 },
    { "question": "Who directed the 2018 blockbuster 'Sanju', a biopic on the life of Sanjay Dutt?", "options": ["Vidhu Vinod Chopra", "Rajkumar Hirani", "Anurag Basu", "Abhijat Joshi"], "answer": 1 },
    { "question": "The song 'Kajra Re' from 'Bunty Aur Babli' features a special appearance by which actress?", "options": ["Rani Mukerji", "Preity Zinta", "Aishwarya Rai Bachchan", "Sushmita Sen"], "answer": 2 },
    { "question": "What is the profession of Ranbir Kapoor's character 'Bunny' in 'Yeh Jawaani Hai Deewani'?", "options": ["Writer", "Photographer and Videographer", "Musician", "Dancer"], "answer": 1 },
    { "question": "Which movie is based on the real-life story of the Phogat sisters, who are wrestlers?", "options": ["Sultan", "Mary Kom", "Dangal", "Saala Khadoos"], "answer": 2 },
    { "question": "Who played the iconic character of 'Mogambo' in the film 'Mr. India'?", "options": ["Amrish Puri", "Anupam Kher", "Paresh Rawal", "Shakti Kapoor"], "answer": 0 },
    { "question": "In which film did the famous trio of Amitabh Bachchan, Dharmendra, and Hema Malini star together?", "options": ["Seeta Aur Geeta", "Satte Pe Satta", "Sholay", "Naseeb"], "answer": 2 },
    { "question": "Who directed the path-breaking film 'Bandit Queen'?", "options": ["Mira Nair", "Shekhar Kapur", "Deepa Mehta", "Govind Nihalani"], "answer": 1 },
    { "question": "The film 'Haider' is an adaptation of which of Shakespeare's plays?", "options": ["Macbeth", "Othello", "Hamlet", "King Lear"], "answer": 2 },
    { "question": "Which actress made her debut opposite Shah Rukh Khan in 'Om Shanti Om'?", "options": ["Anushka Sharma", "Deepika Padukone", "Sonam Kapoor", "Priyanka Chopra"], "answer": 1 },
    { "question": "What is the name of the college where 'Kuch Kuch Hota Hai' is primarily set?", "options": ["St. Xavier's College", "St. Teresa's College", "St. Anthony's College", "St. Stephen's College"], "answer": 0 },
    { "question": "Who won the National Film Award for Best Actor for his performance in 'Paan Singh Tomar'?", "options": ["Manoj Bajpayee", "Irrfan Khan", "Nawazuddin Siddiqui", "Kay Kay Menon"], "answer": 1 },
    { "question": "The movie 'Udaan' is a coming-of-age story of a boy who wants to be a what?", "options": ["Musician", "Painter", "Writer", "Cricketer"], "answer": 2 },
    { "question": "In 'Zindagi Na Milegi Dobara', what is the adventure sport that the three friends try in Spain?", "options": ["Skydiving, Scuba Diving, Bull Run", "Bungee Jumping, Paragliding, River Rafting", "Rock Climbing, Canyoning, Zip Lining", "Surfing, Kayaking, Mountain Biking"], "answer": 0 },
    { "question": "Who played the titular role in the 2012 film 'Kahaani'?", "options": ["Rani Mukerji", "Vidya Balan", "Priyanka Chopra", "Tabu"], "answer": 1 },
    { "question": "Which movie features the famous song 'Pehla Nasha'?", "options": ["Qayamat Se Qayamat Tak", "Jo Jeeta Wohi Sikandar", "Dil Hai Ke Manta Nahin", "Aashiqui"], "answer": 1 },
    { "question": "Who is the director of the black comedy film 'Delhi Belly'?", "options": ["Abhinay Deo", "Anurag Kashyap", "Dibakar Banerjee", "Vikramaditya Motwane"], "answer": 0 },
    { "question": "What is the name of Salman Khan's character in the 'Dabangg' series?", "options": ["Chulbul Pandey", "Radhe", "Tiger", "Prem"], "answer": 0 },
    { "question": "The film 'Rang De Basanti' is set against the backdrop of which historical event?", "options": ["The Quit India Movement", "The Jallianwala Bagh massacre", "The life of Bhagat Singh", "The Partition of India"], "answer": 2 },
    { "question": "Who played the role of 'Veer' and 'Zaara' in the film 'Veer-Zaara'?", "options": ["Shah Rukh Khan and Kajol", "Shah Rukh Khan and Preity Zinta", "Amitabh Bachchan and Hema Malini", "Abhishek Bachchan and Rani Mukerji"], "answer": 1 },
    { "question": "In which city is the movie 'Gully Boy' primarily set?", "options": ["Delhi", "Kolkata", "Mumbai", "Chennai"], "answer": 2 },
    { "question": "Who composed the music for the epic historical drama 'Jodhaa Akbar'?", "options": ["Anu Malik", "Pritam", "Shankar-Ehsaan-Loy", "A. R. Rahman"], "answer": 3 },
    { "question": "The movie 'Vicky Donor' deals with the sensitive topic of?", "options": ["Surrogacy", "Sperm Donation", "Organ Donation", "Adoption"], "answer": 1 },
    { "question": "Which of these actors is NOT a part of the film 'Dil Dhadakne Do'?", "options": ["Ranveer Singh", "Anushka Sharma", "Priyanka Chopra", "Deepika Padukone"], "answer": 3 },
    { "question": "Who directed the silent film 'Pushpak' (1987)?", "options": ["Singeetam Srinivasa Rao", "Kamal Haasan", "Balu Mahendra", "Mani Ratnam"], "answer": 0 },
    { "question": "In the movie 'Andhadhun', what is the profession of Ayushmann Khurrana's character?", "options": ["Singer", "Pianist", "Dancer", "Painter"], "answer": 1 },
    { "question": "Which actress won the Filmfare Award for Best Actress for 'Queen'?", "options": ["Deepika Padukone", "Priyanka Chopra", "Kangana Ranaut", "Alia Bhatt"], "answer": 2 },
    { "question": "What is the name of the train in the iconic song 'Chaiyya Chaiyya'?", "options": ["Nilgiri Mountain Railway", "Darjeeling Himalayan Railway", "Kalka-Shimla Railway", "Matheran Hill Railway"], "answer": 0 },
    { "question": "The movie 'Black Friday' is based on which real-life event?", "options": ["1993 Bombay bombings", "2001 Indian Parliament attack", "2008 Mumbai attacks", "1984 anti-Sikh riots"], "answer": 0 },
    { "question": "Who played the role of the strict father in 'Dilwale Dulhania Le Jayenge'?", "options": ["Anupam Kher", "Amrish Puri", "Alok Nath", "Kader Khan"], "answer": 1 },
    { "question": "In 'The Legend of Bhagat Singh', who played the titular role?", "options": ["Bobby Deol", "Sonu Sood", "Ajay Devgn", "Manoj Bajpayee"], "answer": 2 },
    { "question": "Which film marked the directorial debut of Karan Johar?", "options": ["Dilwale Dulhania Le Jayenge", "Kuch Kuch Hota Hai", "Kabhi Khushi Kabhie Gham...", "Kal Ho Naa Ho"], "answer": 1 },
    { "question": "The song 'Maa' from 'Taare Zameen Par' is sung by which acclaimed singer?", "options": ["Shankar Mahadevan", "A. R. Rahman", "Sonu Nigam", "Udit Narayan"], "answer": 0 },
    { "question": "Who played the role of 'Bhallaladeva' in the 'Baahubali' series?", "options": ["Prabhas", "Rana Daggubati", "Sathyaraj", "Nassar"], "answer": 1 },
    { "question": "The movie 'Secret Superstar' tells the story of a girl who wants to be a?", "options": ["Dancer", "Actress", "Singer", "Writer"], "answer": 2 },
    { "question": "Which of these is a famous dialogue by Sunny Deol from the movie 'Gadar: Ek Prem Katha'?", "options": ["Yeh dhai kilo ka haath jab kisi pe padta hai na, toh aadmi uthta nahi, utth jata hai", "Hindustan zindabad tha, zindabad hai, aur zindabad rahega!", "Balwant Rai ke kutton!", "Tareekh pe tareekh"], "answer": 1 },
    { "question": "Who is the music director of the film 'Barfi!'?", "options": ["Pritam", "Amit Trivedi", "Shankar-Ehsaan-Loy", "Vishal-Shekhar"], "answer": 0 },
    { "question": "In the movie 'Newton', what is the protagonist's profession?", "options": ["Government Clerk on election duty", "School Teacher", "Police Officer", "Journalist"], "answer": 0 },
    { "question": "Which actress played the role of 'Mastani' in 'Bajirao Mastani'?", "options": ["Priyanka Chopra", "Deepika Padukone", "Anushka Sharma", "Sonam Kapoor"], "answer": 1 },
    { "question": "The film 'Jaane Bhi Do Yaaro' is a cult classic in which genre?", "options": ["Romantic Comedy", "Political Satire", "Horror Comedy", "Action Thriller"], "answer": 1 },
    { "question": "Who played the lead role of 'Sanjay Singhania' in the movie 'Ghajini'?", "options": ["Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Hrithik Roshan"], "answer": 2 },
    { "question": "Which movie features the song 'Iktara'?", "options": ["Wake Up Sid", "Rock On!!", "Jaane Tu... Ya Jaane Na", "Life in a... Metro"], "answer": 0 },
    { "question": "Who directed the fantasy film 'Tumbbad'?", "options": ["Anand Gandhi", "S. Shankar", "Rahi Anil Barve", "Aanand L. Rai"], "answer": 2 },
    { "question": "In 'Stree', what do the villagers write outside their homes to protect themselves?", "options": ["O Stree, Kal Aana", "Stree, Mat Aana", "Yahan Stree Nahi Hai", "Kripya Yahan Na Aayein"], "answer": 0 },
    { "question": "Which actor is known for his signature 'Jhakaas' catchphrase?", "options": ["Anil Kapoor", "Govinda", "Jackie Shroff", "Sanjay Dutt"], "answer": 0 },
    { "question": "The film 'Article 15' is inspired by which article of the Indian Constitution?", "options": ["Article 14", "Article 15", "Article 17", "Article 21"], "answer": 1 },
    { "question": "Who won the Best Supporting Actor award for his role in 'Kapoor & Sons'?", "options": ["Fawad Khan", "Rajat Kapoor", "Rishi Kapoor", "Sidharth Malhotra"], "answer": 2 },
    { "question": "In 'Jab Tak Hai Jaan', Shah Rukh Khan's character has what profession in the Indian Army?", "options": ["Pilot", "Bomb Disposal Expert", "Doctor", "Commando"], "answer": 1 },
    { "question": "Which movie is based on the Chetan Bhagat novel 'Five Point Someone'?", "options": ["2 States", "Kai Po Che!", "3 Idiots", "Half Girlfriend"], "answer": 2 },
    { "question": "Who played the role of 'Piku's' father, Bhaskor Banerjee?", "options": ["Irrfan Khan", "Amitabh Bachchan", "Jisshu Sengupta", "Moushumi Chatterjee"], "answer": 1 },
    { "question": "The movie 'Highway' was directed by?", "options": ["Imtiaz Ali", "Anurag Basu", "Zoya Akhtar", "Ayan Mukerji"], "answer": 0 },
    { "question": "Which actress is paired opposite Aamir Khan in 'Ghajini'?", "options": ["Asin", "Jiah Khan", "Priyanka Chopra", "Katrina Kaif"], "answer": 0 },
    { "question": "What is the name of the protagonist in the film 'Swades', played by Shah Rukh Khan?", "options": ["Mohan Bhargava", "Sunil", "Raj", "Rahul"], "answer": 0 },
    { "question": "Who directed the film 'Dev.D', a modern-day take on 'Devdas'?", "options": ["Anurag Kashyap", "Dibakar Banerjee", "Vishal Bhardwaj", "Tigmanshu Dhulia"], "answer": 0 },
    { "question": "The song 'Senorita' from 'Zindagi Na Milegi Dobara' was sung by the three lead actors and which female singer?", "options": ["Shreya Ghoshal", "Sunidhi Chauhan", "María del Mar Fernández", "Alka Yagnik"], "answer": 2 },
    { "question": "Which film won the National Award for Best Popular Film Providing Wholesome Entertainment in 2018?", "options": ["Baahubali 2: The Conclusion", "Toilet: Ek Prem Katha", "Jolly LLB 2", "Hindi Medium"], "answer": 0 },
    { "question": "In 'Ludo', which actor's story is associated with a ventriloquist puppet?", "options": ["Pankaj Tripathi", "Aditya Roy Kapur", "Rajkummar Rao", "Abhishek Bachchan"], "answer": 1 },
    { "question": "Who played the role of the antagonist 'Kancha Cheena' in the 2012 remake of 'Agneepath'?", "options": ["Rishi Kapoor", "Danny Denzongpa", "Sanjay Dutt", "Prakash Raj"], "answer": 2 },
    { "question": "The movie 'Parched' explores the lives of women in a village in which Indian state?", "options": ["Rajasthan", "Gujarat", "Uttar Pradesh", "Madhya Pradesh"], "answer": 1 },
    { "question": "Who is the director of the film 'Kapoor & Sons'?", "options": ["Shakun Batra", "Ayan Mukerji", "Karan Johar", "Punit Malhotra"], "answer": 0 },
    { "question": "Which of these films is NOT based on a book by Chetan Bhagat?", "options": ["3 Idiots", "2 States", "Kai Po Che!", "Band Baaja Baaraat"], "answer": 3 },
    { "question": "The movie 'Slumdog Millionaire' was directed by?", "options": ["Mira Nair", "Danny Boyle", "Gurinder Chadha", "Deepa Mehta"], "answer": 1 },
    { "question": "In 'Bareilly Ki Barfi', what is the name of the book that Bitti falls in love with?", "options": ["Bareilly Ki Barfi", "Prem Ki Bhoot", "Anokha Pyar", "Ek Anokhi Prem Kahani"], "answer": 0 },
    { "question": "Who played the role of 'Daljeet 'DJ' Singh' in 'Rang De Basanti'?", "options": ["Aamir Khan", "Siddharth", "Sharman Joshi", "Kunal Kapoor"], "answer": 0 },
    { "question": "The film 'Pad Man' is based on the life of a social activist from which state?", "options": ["Maharashtra", "Tamil Nadu", "Kerala", "Karnataka"], "answer": 1 },
    { "question": "Who directed the horror-comedy 'Go Goa Gone'?", "options": ["Raj & DK", "Sriram Raghavan", "Navdeep Singh", "Rohit Shetty"], "answer": 0 },
    { "question": "Which actor played the role of 'Sameer' in 'Dil Chahta Hai'?", "options": ["Aamir Khan", "Akshaye Khanna", "Saif Ali Khan", "Abhishek Bachchan"], "answer": 2 },
    { "question": "The movie 'Mughal-e-Azam' was originally released in which format?", "options": ["Colour", "Black and White", "3D", "Sepia"], "answer": 1 },
    { "question": "Who won the Best Actress award for the film 'Neerja'?", "options": ["Alia Bhatt", "Sonam Kapoor", "Anushka Sharma", "Vidya Balan"], "answer": 1 },
    { "question": "What is the name of the village in 'Lagaan'?", "options": ["Champaner", "Ramgarh", "Charanpur", "Devgiri"], "answer": 0 },
    { "question": "In 'Hera Pheri', what is the name of the garage owner played by Paresh Rawal?", "options": ["Baburao Ganpatrao Apte", "Shyam", "Raju", "Khadak Singh"], "answer": 0 },
    { "question": "Who is credited with the story of the film 'Bajrangi Bhaijaan'?", "options": ["Kabir Khan", "Salman Khan", "K. V. Vijayendra Prasad", "S. S. Rajamouli"], "answer": 2 },
    { "question": "The movie 'No One Killed Jessica' is based on which real-life case?", "options": ["Aarushi Talwar murder case", "Jessica Lal murder case", "Nitish Katara murder case", "Priyadarshini Mattoo murder case"], "answer": 1 },
    { "question": "Who played the role of 'Langda Tyagi' in 'Omkara'?", "options": ["Ajay Devgn", "Vivek Oberoi", "Saif Ali Khan", "Deepak Dobriyal"], "answer": 2 },
    { "question": "The song 'Dilbar' was a recreated version for which 2018 film?", "options": ["Satyameva Jayate", "Baaghi 2", "Simmba", "Stree"], "answer": 0 },
    { "question": "Who directed the coming-of-age film 'Wake Up Sid'?", "options": ["Ayan Mukerji", "Zoya Akhtar", "Imtiaz Ali", "Karan Johar"], "answer": 0 },
    { "question": "In 'Shubh Mangal Saavdhan', the film tackles what sensitive issue?", "options": ["Erectile Dysfunction", "Premature Ejaculation", "Infertility", "Body Shaming"], "answer": 0 },
    { "question": "Which of these films starring Irrfan Khan was set in the United States?", "options": ["The Namesake", "Piku", "Karwaan", "Qissa"], "answer": 0 },
    { "question": "Who played the role of 'Simran's' mother in 'Dilwale Dulhania Le Jayenge'?", "options": ["Himani Shivpuri", "Farida Jalal", "Kirron Kher", "Achala Sachdev"], "answer": 1 },
    { "question": "The film 'A Wednesday!' stars which two powerhouse actors in the lead roles?", "options": ["Anupam Kher and Naseeruddin Shah", "Amitabh Bachchan and Rishi Kapoor", "Irrfan Khan and Paresh Rawal", "Manoj Bajpayee and Kay Kay Menon"], "answer": 0 },
    { "question": "Which city serves as the backdrop for the movie 'Barfi!'?", "options": ["Kolkata and Darjeeling", "Shimla and Manali", "Mumbai and Goa", "Delhi and Agra"], "answer": 0 },
    { "question": "Who is the director of the sports drama 'Soorma'?", "options": ["Shaad Ali", "Rakeysh Omprakash Mehra", "Kabir Khan", "Neeraj Pandey"], "answer": 0 },
    { "question": "In 'Badhaai Ho', what is the 'good news' that causes embarrassment to the family?", "options": ["The son is getting married", "The grandmother is getting remarried", "The middle-aged parents are expecting a child", "The daughter is moving abroad"], "answer": 2 },
    { "question": "Which actor has played the role of 'Prem' in several Rajshri Productions films?", "options": ["Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Hrithik Roshan"], "answer": 1 },
    { "question": "The movie 'Lipstick Under My Burkha' faced controversy with which organization before its release?", "options": ["The Censor Board of Film Certification", "The National Commission for Women", "A political party", "A religious group"], "answer": 0 },
    { "question": "Who played the role of the hearing and speech-impaired protagonist in 'Khamoshi: The Musical'?", "options": ["Salman Khan", "Nana Patekar", "Aamir Khan", "Shah Rukh Khan"], "answer": 1 },
    { "question": "Which director is known for his collaborations with writer Jaideep Sahni on films like 'Chak De! India' and 'Rocket Singh: Salesman of the Year'?", "options": ["Shimit Amin", "Aditya Chopra", "Dibakar Banerjee", "Anurag Kashyap"], "answer": 0 }
];
const storageKey = "usedFilmsIndices";

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