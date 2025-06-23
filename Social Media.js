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
    { question: "Which social media platform was launched first?", options: ["Facebook", "Twitter", "Instagram", "MySpace"], answer: 3 },
    { question: "Who is the founder of Twitter?", options: ["Jack Dorsey", "Evan Williams", "Biz Stone", "Noah Glass"], answer: 0 },
    { question: "Which social media platform is known for its short-form video content?", options: ["TikTok", "Snapchat", "YouTube", "Instagram"], answer: 0 },
    { question: "Who is the CEO of Facebook?", options: ["Mark Zuckerberg", "Sheryl Sandberg", "David Marcus", "Susan Wojcicki"], answer: 0 },
    { question: "Which social media platform is used for professional networking?", options: ["LinkedIn", "Facebook", "Twitter", "Instagram"], answer: 0 },
    { question: "Who is the founder of Instagram?", options: ["Kevin Systrom", "Mike Krieger", "Bradley Chambers", "All of the above"], answer: 3 },
    { question: "Which social media platform is known for its live streaming feature?", options: ["Twitch", "YouTube", "Facebook Live", "Periscope"], answer: 0 },
    { question: "Who is the CEO of YouTube?", options: ["Susan Wojcicki", "Susan Hendricks", "Susan Kare", "Susan B. Anthony"], answer: 0 },
    { question: "Which social media platform is known for its photo-sharing feature?", options: ["Instagram", "Twitter", "Facebook", "Snapchat"], answer: 0 },
    { question: "Who is the founder of Snapchat?", options: ["Evan Spiegel", "Benny Trask", "Reginald Brown", "All of the above"], answer: 3 },
    { question: "Which social media platform is used for microblogging?", options: ["Twitter", "Facebook", "Instagram", "Snapchat"], answer: 0 },
    { question: "Who is the CEO of TikTok?", options: ["Shou Zi Chew", "ByteDance", "All of the above", "None of the above"], answer: 2 },
    { question: "Which social media platform is known for its anonymous messaging feature?", options: ["Snapchat", "Instagram", "Twitter", "Facebook"], answer: 0 },
    { question: "Who is the founder of LinkedIn?", options: ["Reid Hoffman", "Allen Blue", "Konstantin Guericke", "All of the above"], answer: 3 },
    { question: "Which social media platform is known for its virtual reality content?", options: ["Facebook", "Instagram", "Snapchat", "Twitter"], answer: 0 },
    {
        question: "Who is the most subscribed YouTuber in 2025?",
        options: ["PewDiePie", "MrBeast", "T-Series", "Cocomelon"],
        answer: 1
    },
    {
        question: "Which YouTube channel has the second most subscribers in 2025?",
        options: ["MrBeast", "T-Series", "Vlad and Niki", "Kids Diana Show"],
        answer: 1
    },
    {
        question: "Which YouTube channel is known for nursery rhymes and has over 190 million subscribers?",
        options: ["Cocomelon", "T-Series", "SET India", "PewDiePie"],
        answer: 0
    },
    {
        question: "Approximately how many videos has T-Series published as of 2025?",
        options: ["5,000", "10,000", "23,000", "50,000"],
        answer: 2
    },
    {
        question: "Which YouTube channel is famous for elaborate giveaways and challenges?",
        options: ["MrBeast", "PewDiePie", "Cocomelon", "SET India"],
        answer: 0
    },
    {
        question: "How many monthly active users does Facebook have in 2025?",
        options: [
            "1.5 billion",
            "2.1 billion",
            "2.96 billion",
            "3.5 billion"
        ],
        answer: 2
    },
    {
        question: "What percentage of global social media ad spend does Facebook account for in 2025?",
        options: ["25%", "40%", "59%", "75%"],
        answer: 2
    },
    {
        question: "Among which age group is Facebook usage declining in 2025?",
        options: ["18-24", "25-34", "35-44", "45-54"],
        answer: 0
    },
    {
        question: "Which feature is Facebook especially known for?",
        options: ["Stories", "Groups and Events", "Short videos", "Live streaming"],
        answer: 1
    },
    {
        question: "Which company owns Facebook?",
        options: ["Google", "Meta", "Apple", "Amazon"],
        answer: 1
    },
    {
        question: "How many monthly active users does Instagram have in 2025?",
        options: [
            "1 billion",
            "1.5 billion",
            "2.09 billion",
            "2.5 billion"
        ],
        answer: 2
    },
    {
        question: "Which content format is Instagram most famous for?",
        options: ["Long-form videos", "Photo posts and Reels", "Text posts", "Podcasts"],
        answer: 1
    },
    {
        question: "What is the year-over-year growth percentage of Instagram users in 2025?",
        options: ["5%", "8.3%", "12%", "20%"],
        answer: 1
    },
    {
        question: "Which demographic is Instagram especially popular with?",
        options: ["Baby Boomers", "Gen Z", "Millennials", "Gen Alpha"],
        answer: 1
    },
    {
        question: "Which company owns Instagram?",
        options: ["Meta", "Snap Inc.", "Google", "TikTok Inc."],
        answer: 0
    },
    {
        question: "How many monthly active users does TikTok have globally in 2025?",
        options: [
            "1.2 billion",
            "1.5 billion",
            "1.8 billion",
            "2.1 billion"
        ],
        answer: 2
    },
    {
        question: "Which age group is TikTok most popular among in the U.S. in 2025?",
        options: ["Gen X", "Millennials", "Gen Z", "Baby Boomers"],
        answer: 2
    },
    {
        question: "What is the average daily time spent per user on TikTok in 2025?",
        options: ["38 minutes", "45 minutes", "52 minutes", "58 minutes"],
        answer: 3
    },
    {
        question: "Which content format dominates TikTok?",
        options: ["Short-form videos", "Photo posts", "Long podcasts", "Text updates"],
        answer: 0
    },
    {
        question: "What is TikTok's year-over-year growth rate in 2025?",
        options: ["8%", "10%", "14%", "20%"],
        answer: 2
    },
    {
        question: "How many monthly active users does WhatsApp have in 2025?",
        options: [
            "1.5 billion",
            "2.15 billion",
            "2.5 billion",
            "3 billion"
        ],
        answer: 1
    },
    {
        question: "Which company owns WhatsApp?",
        options: ["Meta", "Google", "Apple", "Microsoft"],
        answer: 0
    },
    {
        question: "What is WhatsApp primarily used for?",
        options: ["Video sharing", "Real-time communication", "Photo editing", "Blogging"],
        answer: 1
    },
    {
        question: "Which messaging app is known as a privacy-first alternative to WhatsApp?",
        options: ["Telegram", "Signal", "WeChat", "Snapchat"],
        answer: 0
    },
    {
        question: "Approximately how many monthly active users does Telegram have in 2025?",
        options: ["500 million", "700 million", "900 million", "1.1 billion"],
        answer: 2
    },
    {
        question: "How many monthly active users does Snapchat have in 2025?",
        options: ["560 million", "650 million", "750 million", "850 million"],
        answer: 2
    },
    {
        question: "Snapchat is especially popular among which age group?",
        options: ["Gen Alpha and younger millennials", "Baby Boomers", "Gen X", "Millennials"],
        answer: 0
    },
    {
        question: "Which feature is Snapchat known for?",
        options: ["AR filters and Bitmoji", "Long videos", "Photo albums", "Live podcasts"],
        answer: 0
    },
    {
        question: "Snapchat's monthly active users have changed how in 2025?",
        options: ["Increased by 10%", "Remained stable", "Decreased by 5%", "Decreased by 15%"],
        answer: 2
    },
    {
        question: "How many monthly active users does Threads have in 2025?",
        options: ["150 million", "285 million", "400 million", "500 million"],
        answer: 1
    },
    {
        question: "What is the year-over-year growth rate of Threads in 2025?",
        options: ["27%", "45%", "63%", "75%"],
        answer: 2
    },
    {
        question: "Which platform is known for raw, unfiltered content and has 90 million users in 2025?",
        options: ["BeReal", "Snapchat", "Threads", "TikTok"],
        answer: 0
    },
    {
        question: "Which social media platform is the largest in China with 1.34 billion monthly active users?",
        options: ["WeChat", "TikTok", "Facebook", "Instagram"],
        answer: 0
    },
    {
        question: "Which platform has the highest average daily user time spent in 2025?",
        options: ["Facebook", "TikTok", "YouTube", "Instagram"],
        answer: 1
    },
    {
        question: "Who is the most followed person across social media platforms in 2025?",
        options: ["Selena Gomez", "Cristiano Ronaldo", "Justin Bieber", "Taylor Swift"],
        answer: 1
    },
    {
        question: "Approximately how many total followers does Cristiano Ronaldo have across social media in 2025?",
        options: ["685 million", "816 million", "1.02 billion", "500 million"],
        answer: 1
    },
    {
        question: "Which celebrity has the second highest total social media followers in 2025?",
        options: ["Selena Gomez", "Ariana Grande", "Justin Bieber", "Taylor Swift"],
        answer: 0
    },
    {
        question: "Who leads TikTok as the most followed creator in 2025?",
        options: ["MrBeast", "Khaby Lame", "Charli D’Amelio", "Bella Poarch"],
        answer: 1
    },
    {
        question: "Which YouTuber ranks in the top 5 most followed overall across platforms in 2025?",
        options: ["MrBeast", "PewDiePie", "Vlad and Niki", "Dude Perfect"],
        answer: 0
    },
    {
        question: "Who is the most followed Instagram account in 2025?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Selena Gomez", "Dwayne Johnson"],
        answer: 0
    },
    {
        question: "Which brand is among the top 25 most followed social media accounts in 2025?",
        options: ["Nike", "Adidas", "Apple", "Samsung"],
        answer: 0
    },
    {
        question: "Which female celebrity has over 500 million total followers across social media platforms in 2025?",
        options: ["Ariana Grande", "Kim Kardashian", "Taylor Swift", "Selena Gomez"],
        answer: 3
    },
    {
        question: "Who is the most followed person on Instagram with over 630 million followers in 2025?",
        options: ["Kylie Jenner", "Cristiano Ronaldo", "Dwayne Johnson", "Selena Gomez"],
        answer: 1
    },
    {
        question: "Which social media platform does Cristiano Ronaldo NOT have a presence on, despite his massive following?",
        options: ["Instagram", "TikTok", "Facebook", "X (Twitter)"],
        answer: 1
    },
    {
        question: "Which celebrity is known as the most followed person on TikTok in 2025?",
        options: ["Addison Rae", "Charli D’Amelio", "Khaby Lame", "Bella Poarch"],
        answer: 2
    },
    {
        question: "Who holds the Guinness World Record for the most photos of people holding candy uploaded to Instagram in one hour?",
        options: ["CandyLovers", "JOYRIDE (USA)", "SweetPics", "CandyCrew"],
        answer: 1
    },
    {
        question: "Which social media influencer broke the record for fastest growth to 100 million followers on TikTok?",
        options: ["MrBeast", "Khaby Lame", "Charli D’Amelio", "Bella Poarch"],
        answer: 2
    },
    {
        question: "Which famous athlete ranks among the top 25 most followed social media accounts with over 320 million followers?",
        options: ["Virat Kohli", "LeBron James", "Roger Federer", "Serena Williams"],
        answer: 0
    },
    {
        question: "Which celebrity is the most followed on Threads in 2025?",
        options: ["Elon Musk", "Barack Obama", "Kim Kardashian", "Selena Gomez"],
        answer: 0
    },
    {
        question: "Which celebrity has the highest Instagram following among the Kardashian-Jenner family in 2025?",
        options: ["Kim Kardashian", "Kylie Jenner", "Khloé Kardashian", "Kourtney Kardashian"],
        answer: 1
    },
    {
        question: "Who is the most followed male musician on Instagram in 2025?",
        options: ["Justin Bieber", "The Weeknd", "Drake", "Ed Sheeran"],
        answer: 0
    },
    {
        question: "Which female singer has over 470 million total followers across social media in 2025?",
        options: ["Taylor Swift", "Ariana Grande", "Beyoncé", "Selena Gomez"],
        answer: 1
    },
    {
        question: "Which social media platform has the smallest number of accounts with over 50 million followers in 2025?",
        options: ["Instagram", "TikTok", "YouTube", "X (Twitter)"],
        answer: 3
    },
    {
        question: "Who is the most followed sports personality on Instagram in 2025?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Virat Kohli", "LeBron James"],
        answer: 0
    },
    {
        question: "Which celebrity has the highest total followers on Facebook in 2025?",
        options: ["Cristiano Ronaldo", "Selena Gomez", "Dwayne Johnson", "Taylor Swift"],
        answer: 0
    },
    {
        question: "Which celebrity is known for having the most followers on YouTube in 2025?",
        options: ["MrBeast", "PewDiePie", "T-Series", "Cocomelon"],
        answer: 0
    },
    {
        question: "Who is the most followed female celebrity on Instagram in 2025?",
        options: ["Selena Gomez", "Kim Kardashian", "Ariana Grande", "Beyoncé"],
        answer: 0
    },
    {
        question: "Which celebrity has over 300 million followers on Instagram and is also a major fashion influencer?",
        options: ["Kylie Jenner", "Kim Kardashian", "Kendall Jenner", "Gigi Hadid"],
        answer: 1
    },
    {
        question: "Which celebrity is known for the largest TikTok following in 2025?",
        options: ["Khaby Lame", "Charli D’Amelio", "Bella Poarch", "Addison Rae"],
        answer: 0
    },
    {
        question: "Which celebrity has the most followers on X (formerly Twitter) in 2025?",
        options: ["Elon Musk", "Barack Obama", "Cristiano Ronaldo", "Justin Bieber"],
        answer: 0
    },
    {
        question: "Which social media platform has the highest average daily user time spent in 2025?",
        options: ["Facebook", "TikTok", "YouTube", "Instagram"],
        answer: 1
    },
    {
        question: "Which celebrity was named a Guinness World Records ICON in June 2025?",
        options: ["Usain Bolt", "Simone Biles", "Lionel Messi", "Serena Williams"],
        answer: 0
    },
    {
        question: "Which celebrity has the largest Instagram following among musicians in 2025?",
        options: ["Justin Bieber", "Taylor Swift", "Ariana Grande", "Beyoncé"],
        answer: 0
    },
    {
        question: "Who is the most followed female celebrity on Threads in 2025?",
        options: ["Selena Gomez", "Kim Kardashian", "Ariana Grande", "Taylor Swift"],
        answer: 0
    },
    {
        question: "Which celebrity has the most followers on Instagram in the sports category in 2025?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "LeBron James", "Serena Williams"],
        answer: 0
    },
    {
        question: "Which celebrity has the largest combined followers on Instagram, TikTok, and YouTube in 2025?",
        options: ["MrBeast", "Khaby Lame", "Cristiano Ronaldo", "Selena Gomez"],
        answer: 2
    },
    {
        question: "Who is the most followed female celebrity on Facebook in 2025?",
        options: ["Selena Gomez", "Taylor Swift", "Ariana Grande", "Kim Kardashian"],
        answer: 0
    },
    {
        question: "Which celebrity is known for the most followers on Snapchat in 2025?",
        options: ["DJ Khaled", "Kim Kardashian", "David Dobrik", "Selena Gomez"],
        answer: 0
    },
    {
        question: "Which celebrity is ranked among the top 10 most followed people on social media but does NOT have a TikTok account in 2025?",
        options: ["Cristiano Ronaldo", "Selena Gomez", "MrBeast", "Khaby Lame"],
        answer: 0
    },
    {
        question: "Which celebrity couple is among the most followed on Instagram in 2025?",
        options: ["Beyoncé & Jay-Z", "Kim Kardashian & Kanye West", "Justin Bieber & Hailey Baldwin", "Kylie Jenner & Travis Scott"],
        answer: 2
    },
    {
        question: "Which celebrity is known for the highest number of YouTube subscribers in the gaming category in 2025?",
        options: ["PewDiePie", "MrBeast", "Vlad and Niki", "Dream"],
        answer: 0
    },
    {
        question: "Which celebrity is the most followed on Threads as of June 2025?",
        options: ["Elon Musk", "Barack Obama", "Kim Kardashian", "Selena Gomez"],
        answer: 0
    },
    {
        question: "Approximately how many total social media users are estimated worldwide in 2025?",
        options: ["4.5 billion", "5.42 billion", "6 billion", "7 billion"],
        answer: 1
    },
    {
        question: "On average, how many different social networks does a person use per month in 2025?",
        options: ["4.2", "5.5", "6.83", "8.1"],
        answer: 2
    },
    {
        question: "What percentage of social media ad spend is projected to be generated on mobile devices by 2030?",
        options: ["60%", "70%", "83%", "90%"],
        answer: 2
    },
    {
        question: "What type of content do 78% of people prefer to learn about new products in 2025?",
        options: ["Long-form articles", "Short video content", "Podcasts", "Infographics"],
        answer: 1
    },
    {
        question: "What percentage of marketers plan to spend more time on social marketing in 2025?",
        options: ["75%", "85%", "93%", "98%"],
        answer: 2
    },
    {
        question: "Which technology has become a major asset for social media marketers in 2025?",
        options: ["Virtual Reality", "Generative AI", "Blockchain", "5G"],
        answer: 1
    },
    {
        question: "What is the recommended number of social media posts per week for brands in 2025?",
        options: ["10-20", "25-40", "48-72", "80-100"],
        answer: 2
    },
    {
        question: "Which industry surprisingly uses AI for social media content creation more than others despite strict regulations?",
        options: ["Government", "Retail", "Entertainment", "Travel"],
        answer: 0
    },
    {
        question: "How many YouTube content creators are there globally as of 2025?",
        options: ["Over 20 million", "Over 40 million", "Over 64 million", "Over 100 million"],
        answer: 2
    },
    {
        question: "Since 2020, approximately how many content creators have joined social media worldwide?",
        options: ["100 million", "165 million", "200 million", "250 million"],
        answer: 1
    },
    {
        question: "What percentage of content creators have full-time jobs alongside content creation?",
        options: ["3 in 10", "4 in 10", "5 in 10", "6 in 10"],
        answer: 3
    },
    {
        question: "What proportion of content creators run their own content-based business?",
        options: ["1 in 10", "2 in 10", "3 in 10", "4 in 10"],
        answer: 1
    },
    {
        question: "Approximately how many TikTok content creators are there globally in 2025?",
        options: ["500,000", "750,000", "1 million", "1.5 million"],
        answer: 2
    },
    {
        question: "What percentage of content creators have been active for 3 to 5 years?",
        options: ["25%", "30%", "35%", "40%"],
        answer: 2
    },
    {
        question: "What is the average daily time spent on social media by internet users in 2025?",
        options: ["1 hour 30 minutes", "2 hours", "2 hours 20 minutes", "3 hours"],
        answer: 2
    },
    {
        question: "How many social platforms does a typical user actively visit per month in 2025?",
        options: ["4.5", "5.6", "6.7", "7.8"],
        answer: 2
    },
    {
        question: "What percentage of consumers interact with brands more often on social media than six months ago?",
        options: ["35%", "42%", "48%", "55%"],
        answer: 2
    },
    {
        question: "What percentage of consumers rely on social media to keep up with trends and cultural moments?",
        options: ["75%", "80%", "85%", "90%"],
        answer: 3
    },
    {
        question: "What is the projected total spend on social media advertising in 2025?",
        options: ["$150 billion", "$200 billion", "$276.7 billion", "$350 billion"],
        answer: 2
    },
    {
        question: "What percentage of digital advertising dollars are spent on social media ads in 2025?",
        options: ["20%", "25%", "30%", "35%"],
        answer: 2
    },
    {
        question: "How much do marketers spend on average per user to reach social audiences in 2025?",
        options: ["$30.15", "$38.50", "$46.47", "$55.00"],
        answer: 2
    },
    {
        question: "Which platform is the leading source of brand awareness among internet users aged 16 to 34?",
        options: ["Facebook", "Instagram", "TikTok", "Snapchat"],
        answer: 0
    },
    {
        question: "Which platform is projected to have the highest social commerce market value by 2029 in the U.S.?",
        options: ["Facebook", "Instagram", "TikTok", "Pinterest"],
        answer: 2
    },
    {
        question: "What percentage of Gen Z consumers prefer discovering products through short-form videos like TikTok and Instagram Reels?",
        options: ["38%", "42%", "48%", "55%"],
        answer: 3
    },
    {
        question: "What is the key content trend marketers are focusing on in 2025?",
        options: ["Long-form blogs", "Podcasts", "Video content especially short-form and AI-enhanced", "Email newsletters"],
        answer: 2
    },
    {
        question: "What tactic is becoming the default for social commerce marketing?",
        options: ["Paid search ads", "Social commerce via posts and videos", "Email marketing", "Affiliate marketing"],
        answer: 1
    },
    {
        question: "Which emerging platforms are attracting audiences seeking tighter connections and less algorithmic noise?",
        options: ["Bluesky and Discord", "Threads and BeReal", "Snapchat and TikTok", "Facebook and Instagram"],
        answer: 0
    },
    {
        question: "Which messaging platforms are increasingly used for customer care and product discovery in 2025?",
        options: ["WhatsApp Business and Messenger", "Telegram and Signal", "Facebook and Instagram", "Snapchat and TikTok"],
        answer: 0
    },
    {
        question: "What is a major challenge for brands in 2025 social media marketing?",
        options: ["Creating more posts", "Earning authentic engagement amid AI-generated content", "Ignoring data analytics", "Focusing only on reach"],
        answer: 1
    },
    {
        question: "What is a key factor for brands to succeed in social media marketing in 2025?",
        options: ["Posting the most content", "Making data-driven decisions", "Using only one platform", "Focusing on paid ads only"],
        answer: 1
    },
    {
        question: "What percentage of social marketers now see AI as revolutionary technology that can create job opportunities?",
        options: ["45%", "55%", "69%", "80%"],
        answer: 2
    },
    {
        question: "Which content creation task is AI commonly used for in social media marketing?",
        options: ["Writing captions", "Creating images", "Drafting influencer proposals", "All of the above"],
        answer: 3
    },
    {
        question: "Which industries are leading in AI adoption for social media content despite strict compliance rules?",
        options: ["Finance, healthcare, government", "Retail and entertainment", "Travel and hospitality", "Education and real estate"],
        answer: 0
    },
    {
        question: "What is the average growth rate of social media users year-over-year as of 2025?",
        options: ["3.0%", "4.7%", "5.4%", "6.0%"],
        answer: 2
    },
    {
        question: "How many new social media users join globally every second in 2025?",
        options: ["5.2", "6.3", "7.6", "8.4"],
        answer: 2
    },
    {
        question: "What is the average daily time spent on social media in 2025?",
        options: ["1 hour 50 minutes", "2 hours 20 minutes", "2 hours 45 minutes", "3 hours 10 minutes"],
        answer: 1
    },
    {
        question: "What is the average number of social platforms visited monthly by users in 2025?",
        options: ["5.4", "6.0", "6.7", "7.2"],
        answer: 2
    },
    {
        question: "What percentage of consumers have purchased a product they discovered in a brand’s social media post?",
        options: ["60%", "68%", "76%", "82%"],
        answer: 2
    },
    {
        question: "Which generation leans most into TikTok for product discovery and cultural norms in 2025?",
        options: ["Millennials", "Gen Z", "Gen Alpha", "Gen X"],
        answer: 1
    },
    {
        question: "Which generation prefers Facebook for product discovery in 2025?",
        options: ["Gen Z", "Millennials", "Gen X", "Baby Boomers"],
        answer: 1
    },
    {
        question: "Which content format is considered essential for social media marketing success in 2025?",
        options: ["Short-form video", "Long-form video", "Text posts", "Podcasts"],
        answer: 0
    },
    {
        question: "What is a key reason brands cannot afford a single-channel social media strategy in 2025?",
        options: ["Users prefer multi-platform engagement", "Single channels are too expensive", "Single channels have poor analytics", "Single channels have no advertising options"],
        answer: 0
    },
    {
        question: "What is the projected social commerce market size in the U.S. by 2029?",
        options: ["$100 billion", "$120 billion", "$150 billion", "$180 billion"],
        answer: 2
    },
    {
        question: "What is the main driver behind the rise of niche communities on social media in 2025?",
        options: ["Fragmentation and demand for tailored content", "Better advertising", "More influencers", "Platform mergers"],
        answer: 0
    },
    {
        question: "What is a key social media content trend in 2025 that encourages brands to push creative boundaries?",
        options: [
            "Strict brand consistency",
            "Creative disruption with inconsistent brand voices",
            "Limiting content to text only",
            "Avoiding humor in posts"
        ],
        answer: 1
    },
    {
        question: "Why are many brands experimenting with unfiltered, real-time content on platforms like Threads and X in 2025?",
        options: [
            "To maintain polished messaging",
            "To entertain and build authentic connections",
            "To reduce posting frequency",
            "To focus only on paid ads"
        ],
        answer: 1
    },
    {
        question: "What is the 'vibe' culture trend in social media for 2025?",
        options: [
            "Fleeting viral trends",
            "Slower, mood-driven moments that build emotional experiences",
            "Ignoring audience moods",
            "Focusing solely on product features"
        ],
        answer: 1
    },
    {
        question: "How are social marketers using AI differently in 2025 compared to previous years?",
        options: [
            "Avoiding AI tools",
            "Using AI as a collaborative team member and sharing prompts openly",
            "Relying solely on AI without human input",
            "Using AI only for data analysis"
        ],
        answer: 1
    },
    {
        question: "What is the recommended weekly posting range for brands across social platforms in 2025?",
        options: [
            "10-20 posts",
            "25-40 posts",
            "48-72 posts",
            "80-100 posts"
        ],
        answer: 2
    },
    {
        question: "Which industries are surprisingly leading in AI adoption for social media content despite strict regulations?",
        options: [
            "Government, finance, and healthcare",
            "Retail and entertainment",
            "Travel and hospitality",
            "Education and real estate"
        ],
        answer: 0
    },
    {
        question: "What is the main reason short-form video content remains dominant in 2025?",
        options: [
            "Longer attention spans",
            "Dwindling attention spans and higher engagement",
            "Lower production costs",
            "Better monetization options"
        ],
        answer: 1
    },
    {
        question: "What percentage of customers say short-form videos are the most engaging content type in 2025?",
        options: [
            "45%",
            "55%",
            "66%",
            "75%"
        ],
        answer: 2
    },
    {
        question: "What new feature is TikTok introducing that might shift user behavior in 2025?",
        options: [
            "Longer video formats",
            "Text-only posts",
            "Live audio rooms",
            "Stories feature"
        ],
        answer: 0
    },
    {
        question: "How are brands advised to balance short-form and long-form video content in 2025?",
        options: [
            "Focus only on short-form",
            "Focus only on long-form",
            "Experiment with story-driven content that transitions between formats",
            "Avoid video content altogether"
        ],
        answer: 2
    },
    {
        question: "What is a growing expectation from consumers regarding mental health in social media marketing?",
        options: [
            "Ignoring mental health topics",
            "Including mental health awareness and empathetic storytelling",
            "Using mental health only for promotions",
            "Avoiding sensitive topics"
        ],
        answer: 1
    },
    {
        question: "Which social media platforms have introduced features to promote healthier online habits in 2025?",
        options: [
            "Threads and TikTok",
            "Facebook and Instagram",
            "Snapchat and Twitter",
            "YouTube and Pinterest"
        ],
        answer: 0
    },
    {
        question: "What is the role of social listening in 2025 social media strategies?",
        options: [
            "Ignoring audience feedback",
            "Decoding mood and energy behind trends for longer-lasting engagement",
            "Focusing only on sentiment analysis",
            "Avoiding trendjacking"
        ],
        answer: 1
    },
    {
        question: "What is the 'outbound engagement' trend in social media for 2025?",
        options: [
            "Brands posting more ads",
            "Brands engaging directly in creators’ comment sections to reach new audiences",
            "Ignoring user comments",
            "Automating all responses"
        ],
        answer: 1
    },
    {
        question: "Why is transparency about the use of AI in content creation becoming important in 2025?",
        options: [
            "To hide AI involvement",
            "To build trust and share best practices openly",
            "To discourage AI use",
            "To comply with legal regulations only"
        ],
        answer: 1
    },
    {
        question: "What is a major challenge when using AI for social media content?",
        options: [
            "Lack of speed",
            "Potential misinterpretations and need for human oversight",
            "High cost",
            "Limited access to AI tools"
        ],
        answer: 1
    },
    {
        question: "What type of content are 78% of people preferring to learn about new products in 2025?",
        options: [
            "Long-form articles",
            "Short video content",
            "Podcasts",
            "Infographics"
        ],
        answer: 1
    },
    {
        question: "How are brands using social media to build relationships in 2025?",
        options: [
            "By focusing on quick sales",
            "By creating emotional resonance and lasting connections",
            "By posting generic ads",
            "By ignoring feedback"
        ],
        answer: 1
    },
    {
        question: "What is a key reason brands are loosening traditional marketing playbooks on social media in 2025?",
        options: [
            "To reduce costs",
            "To prioritize entertainment and creativity",
            "To avoid risks",
            "To focus on print media"
        ],
        answer: 1
    },
    {
        question: "What is the 'micro-virality' trend in social media for 2025?",
        options: [
            "Ignoring viral trends",
            "Using social listening to refine trendjacking for targeted impact",
            "Creating only viral content",
            "Avoiding social listening"
        ],
        answer: 1
    },
    {
        question: "What is the recommended approach for brands to handle AI-generated content in 2025?",
        options: [
            "Use AI blindly without review",
            "Balance AI automation with human creativity and oversight",
            "Avoid AI completely",
            "Use AI only for images"
        ],
        answer: 1
    },
    {
        question: "What is the impact of generative AI on social media marketing jobs in 2025?",
        options: [
            "It threatens all jobs",
            "It creates new job opportunities and enhances creativity",
            "It makes jobs obsolete",
            "It only affects technical roles"
        ],
        answer: 1
    },
    {
        question: "How do brands use 'vibe' culture to their advantage in 2025 social media marketing?",
        options: [
            "By chasing every new trend",
            "By curating slower, mood-driven moments that build brand identity",
            "By ignoring audience moods",
            "By focusing on product specs"
        ],
        answer: 1
    },
    {
        question: "What is a common goal of content experimentation in 2025?",
        options: [
            "Maintaining strict brand voice",
            "Testing diverse voices and personas to delight audiences",
            "Posting less frequently",
            "Avoiding humor"
        ],
        answer: 1
    },
    {
        question: "How do social marketers measure success in 2025?",
        options: [
            "Only by follower counts",
            "By emotional resonance, engagement, and business impact",
            "By number of posts",
            "By paid ad spend"
        ],
        answer: 1
    },
    {
        question: "What role does storytelling play in 2025 social media content?",
        options: [
            "Minimal role",
            "Central role in connecting emotionally and building relationships",
            "Only for long-form content",
            "Only for influencer marketing"
        ],
        answer: 1
    },
    {
        question: "Why is social media described as a 'playground' for brands in 2025?",
        options: [
            "Because it’s unregulated",
            "Because brands can push creative boundaries and have fun",
            "Because it’s free advertising",
            "Because it requires no strategy"
        ],
        answer: 1
    },
    {
        question: "How are brands using social media analytics in 2025?",
        options: [
            "To track only follower growth",
            "To identify audience preferences and optimize content strategy",
            "To ignore engagement metrics",
            "To reduce posting frequency"
        ],
        answer: 1
    },
    {
        question: "What is the role of social commerce in 2025?",
        options: [
            "Minor role",
            "Primary revenue driver on many platforms",
            "Only for large brands",
            "Declining in importance"
        ],
        answer: 1
    },
    {
        question: "Why is emotional resonance important in 2025 social media content?",
        options: [
            "It increases short-term sales only",
            "It builds lasting relationships and brand loyalty",
            "It reduces content production costs",
            "It replaces product quality"
        ],
        answer: 1
    },
    {
        question: "What is a key reason brands are embracing transparency about AI use in content?",
        options: [
            "To comply with regulations",
            "To build trust and foster a culture of learning",
            "To discourage competition",
            "To reduce content volume"
        ],
        answer: 1
    },
    {
        question: "How has AI changed idea generation for social media marketers in 2025?",
        options: [
            "Made it harder",
            "Made it easier and faster",
            "No change",
            "Replaced human creativity"
        ],
        answer: 1
    },
    {
        question: "What is the biggest challenge when balancing AI and human creativity in content creation?",
        options: [
            "Cost of AI tools",
            "Ensuring AI outputs align with brand voice and context",
            "Lack of AI tools",
            "Too much human input"
        ],
        answer: 1
    },
    {
        question: "What kind of content are brands encouraged to create to address mental health in 2025?",
        options: [
            "Empathy-driven storytelling with real narratives",
            "Only promotional content",
            "Avoid sensitive topics",
            "Humorous memes only"
        ],
        answer: 0
    },
    {
        question: "What is a key benefit of social listening in 2025?",
        options: [
            "Ignoring negative feedback",
            "Understanding audience mood and refining content strategy",
            "Increasing ad spend",
            "Reducing content output"
        ],
        answer: 1
    },
    {
        question: "How do brands use outbound engagement in 2025?",
        options: [
            "By commenting on creators’ posts to reach new audiences",
            "By posting ads only",
            "By ignoring comments",
            "By automating all responses"
        ],
        answer: 0
    },
    {
        question: "What is the main advantage of interactive content like quizzes in social media marketing?",
        options: [
            "Increases user engagement",
            "Reduces content production time",
            "Improves SEO rankings automatically",
            "Decreases bounce rates"
        ],
        answer: 0
    },
    {
        question: "Which content format is growing fastest for driving user interaction in 2025?",
        options: [
            "Static images",
            "Interactive polls and quizzes",
            "Long-form blogs",
            "Email newsletters"
        ],
        answer: 1
    },
    {
        question: "What role does gamification play in content creation strategies?",
        options: [
            "Makes content more engaging and fun",
            "Increases content length",
            "Reduces user participation",
            "Limits content reach"
        ],
        answer: 0
    },
    {
        question: "Which technology enables personalized content experiences in 2025?",
        options: [
            "Blockchain",
            "Artificial Intelligence",
            "Virtual Reality",
            "5G Networks"
        ],
        answer: 1
    },
    {
        question: "What is a key benefit of using random facts in content marketing?",
        options: [
            "They are easy to create",
            "They capture attention and encourage sharing",
            "They reduce content quality",
            "They increase ad costs"
        ],
        answer: 1
    },
    {
        question: "Why is mobile optimization critical for content in 2025?",
        options: [
            "Most users access content via mobile devices",
            "Mobile content is easier to create",
            "Desktop usage is increasing",
            "Mobile optimization reduces content length"
        ],
        answer: 0
    },
    {
        question: "Which interactive content type is most effective for lead generation?",
        options: [
            "Quizzes",
            "Infographics",
            "Podcasts",
            "Text posts"
        ],
        answer: 0
    },
    {
        question: "How does storytelling enhance interactive content?",
        options: [
            "By making it more relatable and memorable",
            "By shortening the content",
            "By increasing technical jargon",
            "By focusing on product features only"
        ],
        answer: 0
    },
    {
        question: "What is a common challenge when creating interactive content?",
        options: [
            "Lack of audience interest",
            "Technical complexity and resource needs",
            "Too much engagement",
            "No measurable impact"
        ],
        answer: 1
    },
    {
        question: "Which metric best measures the success of interactive content?",
        options: [
            "Page views",
            "User participation and completion rates",
            "Number of ads clicked",
            "Total word count"
        ],
        answer: 1
    },
    {
        question: "How can brands use quizzes to better understand their audience?",
        options: [
            "By collecting user responses and preferences",
            "By increasing ad impressions",
            "By reducing content length",
            "By avoiding data collection"
        ],
        answer: 0
    },
    {
        question: "What makes content 'interactive'?",
        options: [
            "Static images",
            "User participation and input",
            "Long paragraphs",
            "High word count"
        ],
        answer: 1
    },
    {
        question: "Why are random facts effective in social media posts?",
        options: [
            "They are always humorous",
            "They trigger curiosity and engagement",
            "They require no research",
            "They decrease shareability"
        ],
        answer: 1
    },
    {
        question: "What is an emerging trend in interactive content for 2025?",
        options: [
            "Voice-activated quizzes and polls",
            "Text-only posts",
            "Static infographics",
            "Long video tutorials"
        ],
        answer: 0
    },
    {
        question: "How can AI improve content personalization?",
        options: [
            "By analyzing user behavior to tailor content",
            "By creating generic content",
            "By reducing content variety",
            "By ignoring user preferences"
        ],
        answer: 0
    },
    {
        question: "What is a key factor for success in interactive content marketing?",
        options: [
            "Simplicity and ease of use",
            "Complex interfaces",
            "Long content length",
            "High ad frequency"
        ],
        answer: 0
    },
    {
        question: "Which platform is best suited for interactive quizzes in 2025?",
        options: [
            "Instagram Stories",
            "LinkedIn Articles",
            "Pinterest Boards",
            "Email Newsletters"
        ],
        answer: 0
    },
    {
        question: "How does interactive content impact brand loyalty?",
        options: [
            "It decreases loyalty",
            "It fosters deeper connections and repeat engagement",
            "It has no impact",
            "It only increases sales"
        ],
        answer: 1
    },
    {
        question: "What is a recommended practice when creating quizzes for content marketing?",
        options: [
            "Keep questions relevant and fun",
            "Make quizzes very long",
            "Avoid sharing results",
            "Use complex language"
        ],
        answer: 0
    },
    {
        question: "Why is user-generated content valuable for social media?",
        options: [
            "It reduces content costs and builds trust",
            "It is always negative",
            "It requires no moderation",
            "It decreases engagement"
        ],
        answer: 0
    },
    {
        question: "Which type of content has the highest share rate on social media?",
        options: [
            "Interactive content",
            "Text-only posts",
            "Long-form blogs",
            "Press releases"
        ],
        answer: 0
    },
    {
        question: "How can brands encourage more interaction with their content?",
        options: [
            "By asking questions and using polls",
            "By posting only images",
            "By avoiding calls to action",
            "By limiting posts to once a month"
        ],
        answer: 0
    },
    {
        question: "What is the impact of 5G technology on content consumption?",
        options: [
            "Faster loading times enabling richer interactive content",
            "Slower video streaming",
            "Reduced mobile usage",
            "Less video content creation"
        ],
        answer: 0
    },
    {
        question: "How do brands benefit from using random facts in marketing?",
        options: [
            "They increase content virality and memorability",
            "They confuse the audience",
            "They reduce engagement",
            "They increase production costs"
        ],
        answer: 0
    },
    {
        question: "What is a key design principle for interactive content?",
        options: [
            "User-friendly and intuitive interface",
            "Complex navigation",
            "Minimal user input",
            "No feedback to users"
        ],
        answer: 0
    },
    {
        question: "How can brands measure the ROI of interactive content?",
        options: [
            "By tracking engagement metrics and conversion rates",
            "By counting total posts",
            "By measuring follower count only",
            "By ignoring analytics"
        ],
        answer: 0
    },
    {
        question: "What role do quizzes play in lead generation?",
        options: [
            "They qualify leads by gathering user data",
            "They reduce lead quality",
            "They are unrelated to lead generation",
            "They increase bounce rates"
        ],
        answer: 0
    },
    {
        question: "How does mobile-first content design affect user experience?",
        options: [
            "Improves accessibility and engagement on mobile devices",
            "Decreases desktop usability",
            "Increases loading times",
            "Limits content creativity"
        ],
        answer: 0
    },
    {
        question: "What is a benefit of using interactive infographics?",
        options: [
            "They increase user engagement and information retention",
            "They decrease content clarity",
            "They are costly to produce",
            "They reduce sharing"
        ],
        answer: 0
    },
    {
        question: "How can brands use social media quizzes to boost community building?",
        options: [
            "By encouraging sharing and friendly competition",
            "By limiting participation",
            "By avoiding user feedback",
            "By posting quizzes infrequently"
        ],
        answer: 0
    },
    {
        question: "What is a common mistake in interactive content creation?",
        options: [
            "Making content too complex or lengthy",
            "Using simple language",
            "Including clear calls to action",
            "Testing content before launch"
        ],
        answer: 0
    },
    {
        question: "Which social media platform pioneered Stories format, now widely adopted?",
        options: [
            "Snapchat",
            "Instagram",
            "Facebook",
            "TikTok"
        ],
        answer: 0
    },
    {
        question: "How does user feedback improve content creation?",
        options: [
            "By informing content adjustments to better meet audience needs",
            "By limiting creativity",
            "By reducing posting frequency",
            "By increasing costs"
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
