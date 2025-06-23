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
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: 1 // index of correct option
    },
    {
        question: "What is the main theme of 'To Kill a Mockingbird'?",
        options: ["War", "Justice and racial inequality", "Adventure", "Betrayal"],
        answer: 1
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        answer: 1
    },
    {
        question: "Which novel features the character Heathcliff?",
        options: ["Jane Eyre", "Wuthering Heights", "Pride and Prejudice", "Emma"],
        answer: 1
    },
    {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "J.D. Salinger"],
        answer: 2
    },
    {
        question: "Who is the author of 'Brave New World'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
        answer: 1
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Brontë", "Jane Austen", "Emily Brontë", "Mary Shelley"],
        answer: 1
    },
    {
        question: "Who is the main character in 'Jane Eyre'?",
        options: ["Elizabeth Bennet", "Catherine Earnshaw", "Jane Eyre", "Emma Woodhouse"],
        answer: 2
    },
    {
        question: "Who wrote 'Moby-Dick'?",
        options: ["Nathaniel Hawthorne", "Herman Melville", "Jack London", "Joseph Conrad"],
        answer: 1
    },
    {
        question: "Which Shakespeare play features the character Shylock?",
        options: ["Othello", "The Merchant of Venice", "Macbeth", "Much Ado About Nothing"],
        answer: 1
    },
    {
        question: "Who wrote 'Madame Bovary'?",
        options: ["Gustave Flaubert", "Honoré de Balzac", "Émile Zola", "Victor Hugo"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Canterbury Tales'?",
        options: ["Geoffrey Chaucer", "John Milton", "William Blake", "John Donne"],
        answer: 0
    },
    {
        question: "Who wrote the Greek tragedy 'Oedipus Rex'?",
        options: ["Euripides", "Sophocles", "Aeschylus", "Aristophanes"],
        answer: 1
    },
    {
        question: "In which century was 'Don Quixote' published?",
        options: ["15th century", "16th century", "17th century", "18th century"],
        answer: 2
    },
    {
        question: "What is the first name of Dr. Jekyll in 'Dr. Jekyll and Mr. Hyde'?",
        options: ["Henry", "Robert", "Edward", "John"],
        answer: 0
    },
    {
        question: "Which Charles Dickens novel begins with the line: 'It was the best of times, it was the worst of times'?",
        options: ["Great Expectations", "Oliver Twist", "A Tale of Two Cities", "David Copperfield"],
        answer: 2
    },
    {
        question: "Who is the narrator of 'Moby-Dick'?",
        options: ["Queequeg", "Captain Ahab", "Ishmael", "Starbuck"],
        answer: 2
    },
    {
        question: "What is the title of John Milton's epic poem?",
        options: ["Paradise Lost", "The Divine Comedy", "Beowulf", "The Odyssey"],
        answer: 0
    },
    {
        question: "What is the subtitle of Mary Shelley’s 'Frankenstein'?",
        options: ["The Modern Prometheus", "The Gothic Horror", "The Monster's Tale", "The Lost Creation"],
        answer: 0
    },
    {
        question: "Who wrote the play 'A Streetcar Named Desire'?",
        options: ["Arthur Miller", "Tennessee Williams", "Eugene O'Neill", "Harold Pinter"],
        answer: 1
    },
    {
        question: "In what language was 'Don Quixote' originally written?",
        options: ["French", "Italian", "Spanish", "Portuguese"],
        answer: 2
    },
    {
        question: "Who is the mysterious employer of Jane in 'Jane Eyre'?",
        options: ["Mr. Rochester", "St. John Rivers", "Mr. Brocklehurst", "Mr. Mason"],
        answer: 0
    },
    {
        question: "What animal is central to Orwell’s allegorical novella 'Animal Farm'?",
        options: ["Pigs", "Horses", "Sheep", "Dogs"],
        answer: 0
    },
    {
        question: "Which novel tells the story of Jean Valjean?",
        options: ["Les Misérables", "The Count of Monte Cristo", "Crime and Punishment", "War and Peace"],
        answer: 0
    },
    {
        question: "What is the real name of the author known as Mark Twain?",
        options: ["Samuel Langhorne Clemens", "Charles Lutwidge Dodgson", "Ernest Hemingway", "William Faulkner"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles", "Euripides"],
        answer: 0
    },
    {
        question: "In 'The Scarlet Letter', what does the letter 'A' on Hester Prynne’s dress symbolize?",
        options: ["Adultery", "Anger", "Ambition", "Affection"],
        answer: 0
    },
    {
        question: "Who is the tragic hero in 'Oedipus Rex'?",
        options: ["Oedipus", "Creon", "Tiresias", "Laius"],
        answer: 0
    },
    {
        question: "What is the genre of Bram Stoker’s 'Dracula'?",
        options: ["Gothic fiction", "Romantic fiction", "Science fiction", "Historical fiction"],
        answer: 0
    },
    {
        question: "Which novel by Charles Dickens features the character Ebenezer Scrooge?",
        options: ["Oliver Twist", "David Copperfield", "A Christmas Carol", "Great Expectations"],
        answer: 2
    },
    {
        question: "Who wrote 'Anna Karenina'?",
        options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
        answer: 0
    },
    {
        question: "What is the primary setting of 'Great Expectations'?",
        options: ["England", "France", "United States", "Ireland"],
        answer: 0
    },
    {
        question: "Who wrote 'The Last of the Mohicans'?",
        options: ["James Fenimore Cooper", "Nathaniel Hawthorne", "Herman Melville", "Washington Irving"],
        answer: 0
    },
    {
        question: "What is the theme of 'A Tale of Two Cities'?",
        options: ["Love and betrayal", "Sacrifice and resurrection", "War and peace", "Justice and revenge"],
        answer: 1
    },
    {
        question: "Who is the author of 'Gulliver’s Travels'?",
        options: ["Jonathan Swift", "Daniel Defoe", "Samuel Richardson", "Henry Fielding"],
        answer: 0
    },
    {
        question: "Which novel is set during the Napoleonic Wars?",
        options: ["War and Peace", "Les Misérables", "Crime and Punishment", "The Count of Monte Cristo"],
        answer: 0
    },
    {
        question: "Who wrote 'The Count of Monte Cristo'?",
        options: ["Alexandre Dumas", "Victor Hugo", "Jules Verne", "Emile Zola"],
        answer: 0
    },
    {
        question: "Which Elizabethan poet and dramatist wrote 'Doctor Faustus'?",
        options: ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Donne"],
        answer: 0
    },
    {
        question: "What is the title of the sequel to 'Alice’s Adventures in Wonderland'?",
        options: ["Through the Looking-Glass", "The Hunting of the Snark", "The Wizard of Oz", "Peter Pan"],
        answer: 0
    },
    {
        question: "Who wrote the dystopian novel 'Brave New World'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Margaret Atwood"],
        answer: 0
    },
    {
        question: "Which famous English poet is buried in Westminster Abbey’s Poet’s Corner and wrote 'Paradise Lost'?",
        options: ["John Milton", "William Wordsworth", "Samuel Taylor Coleridge", "Alfred Lord Tennyson"],
        answer: 0
    },
    {
        question: "In which Shakespearean tragedy does the character Iago appear?",
        options: ["Othello", "Macbeth", "Hamlet", "King Lear"],
        answer: 0
    },
    {
        question: "Who wrote the detective novel 'The Hound of the Baskervilles'?",
        options: ["Sir Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "Raymond Chandler"],
        answer: 0
    },
    {
        question: "What is the name of the family estate in Jane Austen’s 'Sense and Sensibility'?",
        options: ["Norland Park", "Pemberley", "Longbourn", "Rosings Park"],
        answer: 0
    },
    {
        question: "Who wrote the play 'Waiting for Godot', often classified as part of the Theatre of the Absurd?",
        options: ["Samuel Beckett", "Eugene Ionesco", "Harold Pinter", "Tom Stoppard"],
        answer: 0
    },
    {
        question: "What is the subtitle of Robert Louis Stevenson’s 'Strange Case of Dr Jekyll and Mr Hyde'?",
        options: ["A Shilling Shock", "A Gothic Tale", "A Modern Mystery", "A Victorian Horror"],
        answer: 0
    },
    {
        question: "Who wrote 'The Adventures of Huckleberry Finn'?",
        options: ["Mark Twain", "Harper Lee", "John Steinbeck", "Ernest Hemingway"],
        answer: 0
    },
    {
        question: "In 'To Kill a Mockingbird,' what is the name of Atticus Finch's daughter?",
        options: ["Scout", "Jem", "Mayella", "Calpurnia"],
        answer: 0
    },
    {
        question: "Who wrote 'The Picture of Dorian Gray'?",
        options: ["Oscar Wilde", "Henry James", "Thomas Hardy", "F. Scott Fitzgerald"],
        answer: 0
    },
    {
        question: "Who is the author of 'Crime and Punishment'?",
        options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Ivan Turgenev", "Anton Chekhov"],
        answer: 0
    },
    {
        question: "What holiday is the poem 'Easter, 1916' by W.B. Yeats about?",
        options: ["Irish uprising against British rule", "Christmas", "Halloween", "St. Patrick's Day"],
        answer: 0
    },
    {
        question: "Who created the famous characters Frodo Baggins, Gandalf, and Legolas?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "Terry Pratchett"],
        answer: 0
    },
    {
        question: "What is the name of the monster in the epic poem 'Beowulf'?",
        options: ["Grendel", "Fenrir", "Hydra", "Chimera"],
        answer: 0
    },
    {
        question: "Who wrote the novel 'Red Dragon', introducing the character Hannibal Lecter?",
        options: ["Thomas Harris", "Stephen King", "Dean Koontz", "Clive Barker"],
        answer: 0
    },
    {
        question: "Which Bengali poet was the first non-European to win the Nobel Prize in Literature in 1913?",
        options: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Bankim Chandra Chattopadhyay", "Michael Madhusudan Dutt"],
        answer: 0
    },
    {
        question: "What is the name of the protagonist in 'The Catcher in the Rye'?",
        options: ["Holden Caulfield", "Jay Gatsby", "Nick Carraway", "Tom Sawyer"],
        answer: 0
    },
    {
        question: "Who wrote the children's book 'The Polar Express'?",
        options: ["Chris Van Allsburg", "Dr. Seuss", "Roald Dahl", "E.B. White"],
        answer: 0
    },
    {
        question: "Which novel features the character Jean Valjean?",
        options: ["Les Misérables", "The Hunchback of Notre-Dame", "The Three Musketeers", "The Count of Monte Cristo"],
        answer: 0
    },
    {
        question: "Who wrote 'Madame Bovary'?",
        options: ["Gustave Flaubert", "Honoré de Balzac", "Émile Zola", "Victor Hugo"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Canterbury Tales'?",
        options: ["Geoffrey Chaucer", "John Milton", "William Blake", "John Donne"],
        answer: 0
    },
    {
        question: "Who wrote the Greek tragedy 'Oedipus Rex'?",
        options: ["Euripides", "Sophocles", "Aeschylus", "Aristophanes"],
        answer: 1
    },
    {
        question: "In which century was 'Don Quixote' published?",
        options: ["15th century", "16th century", "17th century", "18th century"],
        answer: 2
    },
    {
        question: "What is the first name of Dr. Jekyll in 'Dr. Jekyll and Mr. Hyde'?",
        options: ["Henry", "Robert", "Edward", "John"],
        answer: 0
    },
    {
        question: "Which Charles Dickens novel begins with the line: 'It was the best of times, it was the worst of times'?",
        options: ["Great Expectations", "Oliver Twist", "A Tale of Two Cities", "David Copperfield"],
        answer: 2
    },
    {
        question: "Who is the narrator of 'Moby-Dick'?",
        options: ["Queequeg", "Captain Ahab", "Ishmael", "Starbuck"],
        answer: 2
    },
    {
        question: "What is the title of John Milton's epic poem?",
        options: ["Paradise Lost", "The Divine Comedy", "Beowulf", "The Odyssey"],
        answer: 0
    },
    {
        question: "What is the subtitle of Mary Shelley’s 'Frankenstein'?",
        options: ["The Modern Prometheus", "The Gothic Horror", "The Monster's Tale", "The Lost Creation"],
        answer: 0
    },
    {
        question: "Who wrote the play 'A Streetcar Named Desire'?",
        options: ["Arthur Miller", "Tennessee Williams", "Eugene O'Neill", "Harold Pinter"],
        answer: 1
    },
    {
        question: "In what language was 'Don Quixote' originally written?",
        options: ["French", "Italian", "Spanish", "Portuguese"],
        answer: 2
    },
    {
        question: "Who is the mysterious employer of Jane in 'Jane Eyre'?",
        options: ["Mr. Rochester", "St. John Rivers", "Mr. Brocklehurst", "Mr. Mason"],
        answer: 0
    },
    {
        question: "What animal is central to Orwell’s allegorical novella 'Animal Farm'?",
        options: ["Pigs", "Horses", "Sheep", "Dogs"],
        answer: 0
    },
    {
        question: "Which novel tells the story of Jean Valjean?",
        options: ["Les Misérables", "The Count of Monte Cristo", "Crime and Punishment", "War and Peace"],
        answer: 0
    },
    {
        question: "What is the real name of the author known as Mark Twain?",
        options: ["Samuel Langhorne Clemens", "Charles Lutwidge Dodgson", "Ernest Hemingway", "William Faulkner"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Odyssey'?",
        options: ["Homer", "Virgil", "Sophocles", "Euripides"],
        answer: 0
    },
    {
        question: "In 'The Scarlet Letter', what does the letter 'A' on Hester Prynne’s dress symbolize?",
        options: ["Adultery", "Anger", "Ambition", "Affection"],
        answer: 0
    },
    {
        question: "Who is the tragic hero in 'Oedipus Rex'?",
        options: ["Oedipus", "Creon", "Tiresias", "Laius"],
        answer: 0
    },
    {
        question: "What is the genre of Bram Stoker’s 'Dracula'?",
        options: ["Gothic fiction", "Romantic fiction", "Science fiction", "Historical fiction"],
        answer: 0
    },
    {
        question: "Which novel by Charles Dickens features the character Ebenezer Scrooge?",
        options: ["Oliver Twist", "David Copperfield", "A Christmas Carol", "Great Expectations"],
        answer: 2
    },
    {
        question: "Who wrote 'Anna Karenina'?",
        options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
        answer: 0
    },
    {
        question: "What is the primary setting of 'Great Expectations'?",
        options: ["England", "France", "United States", "Ireland"],
        answer: 0
    },
    {
        question: "Who wrote 'The Last of the Mohicans'?",
        options: ["James Fenimore Cooper", "Nathaniel Hawthorne", "Herman Melville", "Washington Irving"],
        answer: 0
    },
    {
        question: "What is the theme of 'A Tale of Two Cities'?",
        options: ["Love and betrayal", "Sacrifice and resurrection", "War and peace", "Justice and revenge"],
        answer: 1
    },
    {
        question: "Who is the author of 'Gulliver’s Travels'?",
        options: ["Jonathan Swift", "Daniel Defoe", "Samuel Richardson", "Henry Fielding"],
        answer: 0
    },
    {
        question: "Which novel is set during the Napoleonic Wars?",
        options: ["War and Peace", "Les Misérables", "Crime and Punishment", "The Count of Monte Cristo"],
        answer: 0
    },
    {
        question: "Who wrote 'The Count of Monte Cristo'?",
        options: ["Alexandre Dumas", "Victor Hugo", "Jules Verne", "Emile Zola"],
        answer: 0
    },
    {
        question: "Which Elizabethan poet and dramatist wrote 'Doctor Faustus'?",
        options: ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Donne"],
        answer: 0
    },
    {
        question: "What is the title of the sequel to 'Alice’s Adventures in Wonderland'?",
        options: ["Through the Looking-Glass", "The Hunting of the Snark", "The Wizard of Oz", "Peter Pan"],
        answer: 0
    },
    {
        question: "Who wrote the dystopian novel 'Brave New World'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Margaret Atwood"],
        answer: 0
    },
    {
        question: "Which famous English poet is buried in Westminster Abbey’s Poet’s Corner and wrote 'Paradise Lost'?",
        options: ["John Milton", "William Wordsworth", "Samuel Taylor Coleridge", "Alfred Lord Tennyson"],
        answer: 0
    },
    {
        question: "In which Shakespearean tragedy does the character Iago appear?",
        options: ["Othello", "Macbeth", "Hamlet", "King Lear"],
        answer: 0
    },
    {
        question: "Who wrote the detective novel 'The Hound of the Baskervilles'?",
        options: ["Sir Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "Raymond Chandler"],
        answer: 0
    },
    {
        question: "What is the name of the family estate in Jane Austen’s 'Sense and Sensibility'?",
        options: ["Norland Park", "Pemberley", "Longbourn", "Rosings Park"],
        answer: 0
    },
    {
        question: "Who wrote the play 'Waiting for Godot', often classified as part of the Theatre of the Absurd?",
        options: ["Samuel Beckett", "Eugene Ionesco", "Harold Pinter", "Tom Stoppard"],
        answer: 0
    },
    {
        question: "What is the subtitle of Robert Louis Stevenson’s 'Strange Case of Dr Jekyll and Mr Hyde'?",
        options: ["A Shilling Shock", "A Gothic Tale", "A Modern Mystery", "A Victorian Horror"],
        answer: 0
    },
    {
        question: "Who wrote 'The Adventures of Huckleberry Finn'?",
        options: ["Mark Twain", "Harper Lee", "John Steinbeck", "Ernest Hemingway"],
        answer: 0
    },
    {
        question: "In 'To Kill a Mockingbird,' what is the name of Atticus Finch's daughter?",
        options: ["Scout", "Jem", "Mayella", "Calpurnia"],
        answer: 0
    },
    {
        question: "Who wrote 'The Picture of Dorian Gray'?",
        options: ["Oscar Wilde", "Henry James", "Thomas Hardy", "F. Scott Fitzgerald"],
        answer: 0
    },
    {
        question: "Who is the author of 'Crime and Punishment'?",
        options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Ivan Turgenev", "Anton Chekhov"],
        answer: 0
    },
    {
        question: "What holiday is the poem 'Easter, 1916' by W.B. Yeats about?",
        options: ["Irish uprising against British rule", "Christmas", "Halloween", "St. Patrick's Day"],
        answer: 0
    },
    {
        question: "Who created the famous characters Frodo Baggins, Gandalf, and Legolas?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "Terry Pratchett"],
        answer: 0
    },
    {
        question: "What is the name of the monster in the epic poem 'Beowulf'?",
        options: ["Grendel", "Fenrir", "Hydra", "Chimera"],
        answer: 0
    },
    {
        question: "Who wrote the novel 'Red Dragon', introducing the character Hannibal Lecter?",
        options: ["Thomas Harris", "Stephen King", "Dean Koontz", "Clive Barker"],
        answer: 0
    },
    {
        question: "Which Bengali poet was the first non-European to win the Nobel Prize in Literature in 1913?",
        options: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Bankim Chandra Chattopadhyay", "Michael Madhusudan Dutt"],
        answer: 0
    },
    {
        question: "What is the name of the protagonist in 'The Catcher in the Rye'?",
        options: ["Holden Caulfield", "Jay Gatsby", "Nick Carraway", "Tom Sawyer"],
        answer: 0
    },
    {
        question: "Who wrote the children's book 'The Polar Express'?",
        options: ["Chris Van Allsburg", "Dr. Seuss", "Roald Dahl", "E.B. White"],
        answer: 0
    },
    {
        question: "Which novel features the character Jean Valjean?",
        options: ["Les Misérables", "The Hunchback of Notre-Dame", "The Three Musketeers", "The Count of Monte Cristo"],
        answer: 0
    },
    {
        question: "Who was the first Asian to win the Nobel Prize in Literature?",
        options: ["Rabindranath Tagore", "Salman Rushdie", "Arundhati Roy", "Vikram Seth"],
        answer: 0
    },
    {
        question: "Which novel by Salman Rushdie won the Booker Prize in 1981?",
        options: ["Midnight's Children", "The Satanic Verses", "Shame", "The Moor's Last Sigh"],
        answer: 0
    },
    {
        question: "Who wrote the epic Mahabharata?",
        options: ["Vyasa", "Valmiki", "Kalidasa", "Tulsidas"],
        answer: 0
    },
    {
        question: "Which Indian author wrote 'The God of Small Things'?",
        options: ["Arundhati Roy", "Jhumpa Lahiri", "Anita Desai", "Kiran Desai"],
        answer: 0
    },
    {
        question: "Who is the author of the novel 'A Suitable Boy'?",
        options: ["Vikram Seth", "Ruskin Bond", "R.K. Narayan", "Amitav Ghosh"],
        answer: 0
    },
    {
        question: "Which Indian writer is famous for the fictional town of Malgudi?",
        options: ["R.K. Narayan", "Mulk Raj Anand", "Khushwant Singh", "Shashi Tharoor"],
        answer: 0
    },
    {
        question: "Who wrote the book 'Serious Men'?",
        options: ["Manu Joseph", "Arundhati Roy", "Salman Rushdie", "Jhumpa Lahiri"],
        answer: 0
    },
    {
        question: "Which Indian mythologist authored 'Myth = Mithya'?",
        options: ["Devdutt Pattanaik", "Amish Tripathi", "R.K. Narayan", "Vikram Seth"],
        answer: 0
    },
    {
        question: "Which novel by Rohinton Mistry is considered a classic of Indian English literature?",
        options: ["A Fine Balance", "The White Tiger", "The Inheritance of Loss", "The Guide"],
        answer: 0
    },
    {
        question: "Who wrote 'The Forest of Enchantments', a retelling of the Ramayana?",
        options: ["Chitra Banerjee Divakaruni", "Anita Desai", "Arundhati Roy", "Jhumpa Lahiri"],
        answer: 0
    },
    {
        question: "Which Indian author won the Booker Prize for 'The God of Small Things'?",
        options: ["Arundhati Roy", "Kiran Desai", "Jhumpa Lahiri", "Anita Desai"],
        answer: 0
    },
    {
        question: "Who is the author of 'The White Tiger'?",
        options: ["Aravind Adiga", "Vikram Chandra", "Ruskin Bond", "Rohinton Mistry"],
        answer: 0
    },
    {
        question: "Which Indian author wrote 'Midnight's Children'?",
        options: ["Salman Rushdie", "Amitav Ghosh", "R.K. Narayan", "Khushwant Singh"],
        answer: 0
    },
    {
        question: "Who wrote the famous poem collection 'Gitanjali'?",
        options: ["Rabindranath Tagore", "Sarojini Naidu", "Kamala Das", "A.K. Ramanujan"],
        answer: 0
    },
    {
        question: "Which Indian English writer is known for the novel 'The Shadow Lines'?",
        options: ["Amitav Ghosh", "Salman Rushdie", "Jhumpa Lahiri", "Arundhati Roy"],
        answer: 0
    },
    {
        question: "Which Indian author wrote 'The Inheritance of Loss'?",
        options: ["Kiran Desai", "Arundhati Roy", "Jhumpa Lahiri", "Anita Desai"],
        answer: 0
    },
    {
        question: "Who is the author of 'Train to Pakistan'?",
        options: ["Khushwant Singh", "Mulk Raj Anand", "R.K. Narayan", "Ruskin Bond"],
        answer: 0
    },
    {
        question: "Which Indian author is known for his humorous and satirical writing style, including 'English, August'?",
        options: ["Upamanyu Chatterjee", "Vikram Seth", "Amitav Ghosh", "Salman Rushdie"],
        answer: 0
    },
    {
        question: "Who wrote 'The Guide', which was later adapted into a film starring Dev Anand?",
        options: ["R.K. Narayan", "Mulk Raj Anand", "Khushwant Singh", "Ruskin Bond"],
        answer: 0
    },
    {
        question: "Which Indian author wrote 'Clear Light of Day'?",
        options: ["Anita Desai", "Kamala Das", "Arundhati Roy", "Jhumpa Lahiri"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Hungry Tide'?",
        options: ["Amitav Ghosh", "Vikram Seth", "Ruskin Bond", "Kiran Desai"],
        answer: 0
    },
    {
        question: "Which Indian poet is known as the 'Nightingale of India'?",
        options: ["Sarojini Naidu", "Kamala Das", "Meena Alexander", "Arundhati Subramaniam"],
        answer: 0
    },
    {
        question: "Who wrote 'The Palace of Illusions', a retelling of the Mahabharata from Draupadi's perspective?",
        options: ["Chitra Banerjee Divakaruni", "Amish Tripathi", "Devdutt Pattanaik", "Anita Desai"],
        answer: 0
    },
    {
        question: "Which Indian author wrote the book 'The Lowland'?",
        options: ["Jhumpa Lahiri", "Kiran Desai", "Arundhati Roy", "Anita Desai"],
        answer: 1
    },
    {
        question: "Who is the author of 'The Calcutta Chromosome'?",
        options: ["Amitav Ghosh", "Vikram Chandra", "Salman Rushdie", "Khushwant Singh"],
        answer: 1
    },
    {
        question: "Which Indian author wrote 'The Suitable Boy'?",
        options: ["Vikram Seth", "Jhumpa Lahiri", "Salman Rushdie", "Amitav Ghosh"],
        answer: 0
    },
    {
        question: "Who wrote the novel 'Nectar in a Sieve'?",
        options: ["Kamala Markandaya", "Anita Desai", "Arundhati Roy", "Jhumpa Lahiri"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Hungry Tide'?",
        options: ["Amitav Ghosh", "Vikram Seth", "Ruskin Bond", "Kiran Desai"],
        answer: 0
    },
    {
        question: "Which Indian author wrote 'The Moor's Last Sigh'?",
        options: ["Salman Rushdie", "Amitav Ghosh", "Vikram Seth", "Jhumpa Lahiri"],
        answer: 0
    },
    {
        question: "Who wrote 'An Atlas of Impossible Longing'?",
        options: ["Anuradha Roy", "Jhumpa Lahiri", "Kiran Desai", "Arundhati Roy"],
        answer: 0
    },
    {
        question: "Which Indian author is known for the book 'Serious Men'?",
        options: ["Manu Joseph", "Salman Rushdie", "Vikram Seth", "Amitav Ghosh"],
        answer: 0
    },
    {
        question: "Who wrote 'The Immortals of Meluha', the first book in the Shiva Trilogy?",
        options: ["Amish Tripathi", "Devdutt Pattanaik", "Chitra Banerjee Divakaruni", "R.K. Narayan"],
        answer: 0
    },
    {
        question: "Which Indian author wrote 'The God of Small Things'?",
        options: ["Arundhati Roy", "Jhumpa Lahiri", "Anita Desai", "Kiran Desai"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Blue Umbrella'?",
        options: ["Ruskin Bond", "R.K. Narayan", "Khushwant Singh", "Amitav Ghosh"],
        answer: 0
    },
    {
        question: "Which Indian author wrote 'The Guide'?",
        options: ["R.K. Narayan", "Mulk Raj Anand", "Khushwant Singh", "Ruskin Bond"],
        answer: 0
    },
    {
        question: "Who wrote 'The Shadow Lines'?",
        options: ["Amitav Ghosh", "Salman Rushdie", "Jhumpa Lahiri", "Arundhati Roy"],
        answer: 0
    },
    {
        question: "Who is the author of 'The Hungry Tide'?",
        options: ["Amitav Ghosh", "Vikram Seth", "Ruskin Bond", "Kiran Desai"],
        answer: 0
    },
    {
        question: "Which Indian poet wrote 'Gitanjali'?",
        options: ["Rabindranath Tagore", "Sarojini Naidu", "Kamala Das", "A.K. Ramanujan"],
        answer: 0
    },
    {
        question: "Which Indian literary movement was rooted in Marxist ideology and aimed to highlight social inequalities?",
        options: [
            "Hungry Generation Movement",
            "Progressive Writers' Movement",
            "Little Magazine Movement",
            "Bhakti Movement"
        ],
        answer: 1
    },
    {
        question: "Who delivered the presidential address at the first All-India Progressive Writers’ Conference in Lucknow?",
        options: [
            "Jawaharlal Nehru",
            "Mahatma Gandhi",
            "Rabindranath Tagore",
            "Sajjad Zaheer"
        ],
        answer: 0
    },
    {
        question: "The Hungry Generation Movement primarily focused on which language’s poetry?",
        options: [
            "Hindi",
            "Bengali",
            "Marathi",
            "Tamil"
        ],
        answer: 1
    },
    {
        question: "Which literary movement gave a powerful voice to Dalit writings in India?",
        options: [
            "Progressive Writers' Movement",
            "Little Magazine Movement",
            "Dalit Literary Movement",
            "Hungry Generation Movement"
        ],
        answer: 2
    },
    {
        question: "The term 'Hungryalism' was inspired by a phrase from which medieval English poet?",
        options: [
            "Geoffrey Chaucer",
            "William Shakespeare",
            "John Milton",
            "Edmund Spenser"
        ],
        answer: 0
    },
    {
        question: "Which literary movement in India emerged as a response to shrinking space for regional language literature?",
        options: [
            "Little Magazine Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement is known for its focus on socio-religious issues and included Bhai Vir Singh as a prominent figure?",
        options: [
            "Singh Sabha Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Who is considered the greatest contemporary writer-poet of India, known primarily for Bengali literature?",
        options: [
            "Rabindranath Tagore",
            "Bankim Chandra Chattopadhyay",
            "Sarat Chandra Chattopadhyay",
            "Mahashweta Devi"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement was influenced by colonial education and social reform in the 19th century?",
        options: [
            "Indian Renaissance and Reformist Literature",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Little Magazine Movement"
        ],
        answer: 0
    },
    {
        question: "The Progressive Writers' Movement is also known by which Urdu name?",
        options: [
            "Anjuman Tarraqi Mussanafin-e-Hind",
            "Hungryalist Andolan",
            "Kavisena",
            "Dalit Sahitya Andolan"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement sought to revive cultural pride and critique societal evils during colonial times?",
        options: [
            "Indian Renaissance and Reformist Literature",
            "Hungry Generation Movement",
            "Little Magazine Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which movement was launched by Malay Roychoudhury, Samir Roychoudhury, Shakti Chattopadhyay, and Debi Roy?",
        options: [
            "Hungry Generation Movement",
            "Progressive Writers' Movement",
            "Little Magazine Movement",
            "Dalit Literary Movement"
        ],
        answer: 0
    },
    {
        question: "What was the primary aim of the Hungry Generation Movement?",
        options: [
            "To promote traditional Indian values",
            "To confront and disturb colonial literary canons",
            "To support British colonial literature",
            "To translate Western classics"
        ],
        answer: 1
    },
    {
        question: "The Little Magazine Movement helped promote which kind of literature?",
        options: [
            "Mainstream commercial literature",
            "Marginal and regional language literature",
            "Only poetry in English",
            "Ancient Sanskrit texts"
        ],
        answer: 1
    },
    {
        question: "Which Indian literary movement was highly regional and gave momentum to Dalit poetry?",
        options: [
            "Little Magazine Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement was a reaction to the British colonial rule and sought to use literature as protest?",
        options: [
            "Progressive Writers' Movement",
            "Bhakti Movement",
            "Hungry Generation Movement",
            "Little Magazine Movement"
        ],
        answer: 0
    },
    {
        question: "Which movement is associated with the revival of devotional poetry and songs from the 14th to 18th centuries?",
        options: [
            "Bhakti Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Little Magazine Movement"
        ],
        answer: 0
    },
    {
        question: "Who was a leading philosopher and poet associated with the Hungry Generation Movement?",
        options: [
            "Pradip Choudhuri",
            "Sajjad Zaheer",
            "Rabindranath Tagore",
            "Bhai Vir Singh"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement was shaped by the cultural awakening influenced by colonial education?",
        options: [
            "Indian Renaissance and Reformist Literature",
            "Hungry Generation Movement",
            "Dalit Literary Movement",
            "Little Magazine Movement"
        ],
        answer: 0
    },
    {
        question: "Which literary movement in India was inspired by the Russian Writers’ Union?",
        options: [
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Little Magazine Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which movement is known for its anti-imperialist and socially conscious literature?",
        options: [
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Little Magazine Movement",
            "Dalit Literary Movement"
        ],
        answer: 0
    },
    {
        question: "Which movement gave rise to many marginal and vernacular writers in India?",
        options: [
            "Little Magazine Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement was active during the 1950s and 1960s?",
        options: [
            "Little Magazine Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "The term 'Hungryalism' is linked to which phrase from Geoffrey Chaucer?",
        options: [
            "The sowre hungry tyme",
            "The merry month of May",
            "The winter's tale",
            "The knight's tale"
        ],
        answer: 0
    },
    {
        question: "Which literary movement in India was a counter-discourse to colonial literary traditions?",
        options: [
            "Hungry Generation Movement",
            "Progressive Writers' Movement",
            "Little Magazine Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which movement’s literature was often published in non-commercial, regional journals?",
        options: [
            "Little Magazine Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Dalit Literary Movement"
        ],
        answer: 0
    },
    {
        question: "Which literary movement focused on freedom of expression post-colonialism?",
        options: [
            "Hungry Generation Movement",
            "Progressive Writers' Movement",
            "Little Magazine Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Who was the founder of the Progressive Writers' Movement in India?",
        options: [
            "Sajjad Zaheer",
            "Rabindranath Tagore",
            "Jawaharlal Nehru",
            "Munshi Premchand"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement was instrumental in promoting Dalit poetry?",
        options: [
            "Little Magazine Movement",
            "Progressive Writers' Movement",
            "Hungry Generation Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which movement is associated with the phrase 'freedom of pen and brush' in Indian literature?",
        options: [
            "Hungry Generation Movement",
            "Progressive Writers' Movement",
            "Little Magazine Movement",
            "Bhakti Movement"
        ],
        answer: 0
    },
    {
        question: "Which Indian literary movement was heavily influenced by the political and social upheaval of the 1960s?",
        options: [
            "Hungry Generation Movement",
            "Progressive Writers' Movement",
            "Little Magazine Movement",
            "Dalit Literary Movement"
        ],
        answer: 0
    }
];

const storageKey = "usedSportsIndices";

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
