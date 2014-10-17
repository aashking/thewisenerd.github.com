 // Code by David A. Wheeler; this trivial ECMAscript is public domain.
 // Moved the script into HTML body so that search engines, and clients on
 // low-speed lines, would see the "actual" content before these quotes.
 
 // slightly modified for usage by thewisenerd
 // some quotes have been removed/added
 // find the original version here: http://www.dwheeler.com/
  var quotations = new Array(
    "No servant can serve two masters, for either he will hate one and love the other, or he will be devoted to the one and despise the other.  You cannot serve God and money. -- Luke 16:13 (ESV)",
    "Whoever walks in integrity walks securely,but he who makes his ways crooked will be found out. -- Proverbs 10:9",
    "He is no fool who gives what he cannot keep to gain that which he cannot lose. -- Jim Elliot",
    "I don't know who my grandfather was; I am much more concerned to know what his grandson will be.  -- Abraham Lincoln",
    "I object to intellect without discipline;  I object to power without constructive purpose.  -- Spock",
    "I got the bill for my surgery.  Now I know what those doctors were wearing masks for. -- James Boren",
    "All the passions make us commit faults; love makes us commit the most ridiculous ones.  -- La Rochefoucauld",
    "I love you, not only for what you are, but for what I am when I am with you.  -- Roy Croft",
    "Fame lost its appeal for me when I went into a public restroom and an autograph seeker handed me a pen and paper under the stall door.  -- Marlo Thomas",
    "It is a sobering thought that when Mozart was my age, he had been dead for two years.  -- Tom Lehrer",
    "It's kind of fun to do the impossible. -- Walt Disney",
    "No one ever built a statue to a critic.",
    "Not all who own a harp are harpers. -- Marcus Terentius Varro",
    "William Penn's aunts made great apple pies at low prices.  No one else in town could compete with the pie rates of Penn's aunts.",
    "\"Surely you can't be serious.\"<br />\"I am serious, and stop calling me Shirley.\" -- \"Airplane\"",
    // Self-referential jokes... one of my favorite kinds.
    "Heisenberg might have been here.",
    "Answer: No.<br>Question: Is top-posting okay?",
    "You can observe a lot just by watching.  -- Yogi Berra",
    "I got this powdered water -- now I don't know what to add. -- Steven Wright",
    "Omnia dicta fortiora si dicta Latina (Everything sounds more impressive in Latin)",
    "It is the quality rather than the quantity that matters.  -- Lucius Annaeus Seneca",
    "As long as we're going to reinvent the wheel again, we might as well try making it round this time.  -- Mike Dennison",
    "Everyone has a purpose in life.  Perhaps yours is watching television. -- David Letterman",
    "When anyone says 'theoretically,' they really mean 'not really.' -- David Parnas",
    "You can't teach seven foot.  -- Frank Layton, Utah Jazz basketball coach, when asked why he had recruited a seven-foot tall auto mechanic",
    "The hottest places in Hell are reserved for those who, in times of moral crisis, preserved their neutrality. -- Dante",
    "They that can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety. -- Benjamin Franklin",
    "That men do not learn very much from history is the most important of all the lessons that history has to teach.  -- Aldous Huxley",
    "Every revolution begins as an idea in one man's mind. -- Ralph Waldo Emerson",
    "The chief cause of problems is solutions -- Eric Sevareid",
    "This ice cream has half the fat -- so I can eat twice as much!  Oh look, it has one third the sugar... -- David A. Wheeler",
    "Once upon a time, there was a cookie. / I ate it. / And I lived happily ever after. / The cookie, not so much. -- Mercy Wheeler",
    "\"It's today!\" said Piglet.<br>\"My favorite day,\" said Pooh.",
    "Very clever people, those with Brains, very rarely understand anything. -- Winnie-the-Pooh (A.A. Milne)",
    "Computers are useless.  They can only give you answers. -- Pablo Picasso",
    "Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.  -- Martin Luther King Jr.",
    "The trouble with computers is that they do what you tell them, not what you want.  -- D. Cohen",
    "On two occasions I have been asked [by members of Parliament!], 'Pray, Mr.  Babbage, if you put into the machine wrong figures, will the right answers come out?'  I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question. -- Charles Babbage",
    "The so-called 'desktop metaphor' of today's workstations is instead an 'airplane-seat' metaphor.  Anyone who has shuffled a lap full of papers while seated between two portly passengers will recognize the difference -- one can see only a very few things at once.  -- Fred Brooks, Jr.",
    "How long does it take a DEC field service engineer to change a lightbulb?  It depends on how many bad ones he brought with him.",
    "Those who do not understand Unix are condemned to reinvent it, poorly.  -- Henry Spencer",
    "The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man. -- George Bernard Shaw",
    "Nothing endures but change. -- Heraclitus (540 BC - 480 BC), from Diogenes Laertius, Lives of Eminent Philosophers",
    "If I have not seen as far as others, it is because there were giants standing on my shoulders. -- Harold Abelson",
    "Oh, and women don't fall for the \"I hack kernel stuff\" line. I was lied to. -- Mariusz Mazur", // http://lwn.net/Articles/175699/
    "Publicity is justly commended as a remedy for social and industrial diseases. Sunlight is said to be the best of disinfectants; electric light the most efficient policeman. -- Justice Louis Brandeis",
    "Journalist: Can you destroy the earth?<br>The Tick: Egad! I hope not, that's where I keep all my stuff! --  The Tick vs. The Tick",
    "A pizza of radius z and thickness a has a volume of pi z z a",
    "Any problem in computer science can be solved with another layer of indirection. But that usually will create another problem. -- David John Wheeler",
    "Don't anthropomorphise software.  It hates that. -slef", //http://lwn.net/Articles/284916/
    "No one ever got fired for <i>not</i> buying Windows Vista - J. Nicholas Hoover",
    "In the long run, we're all dead. - John Maynard Keynes",
    "It is difficult to get a man to understand something, when his salary depends upon his not understanding it! - Upton Sinclair, 'I, Candidate for Governor: And How I Got Licked' (1935), ISBN 0-520-08198-6; repr. University of California Press, 1994, p. 109.",
    "The law, in its majestic equality, forbids the rich as well as the poor to sleep under bridges, to beg in the streets, and to steal bread. - Anatole France, Le Lys Rouge [The Red Lily] (1894), ch. 7",
    "I tried to measure this to show that you were wrong, but I was only able to show that you're right.  How annoying. - <a href=\"http://lwn.net/Articles/389391/\">Rusty Russell, 2010-05-20</a>",
    // I heard this 2011-06-14 at Forensics conference:
    "Internet Explorer - the #1 browser for downloading a better browser. - Unknown",
    "Creativity is the ability to form similar connections between disparate images and to create something new and hurl it into the future so it becomes a poem, or a building, or a dance, or a novel.  Creativity is, in a sense, future memory - Tony Buzan (of Mind Mapping fame), quoted in 'Moonwalking with Einstein' by Joshua Foer, page 203",
    "As [newspapers] are being sundered by the internet, we can see how tangled the system always was. Outside a relative handful of financial publications, there is no such thing as the news business. There is only the advertising business. - <a href='http://www.shirky.com/weblog/2011/07/we-need-the-new-news-environment-to-be-chaotic/'>Clay Shirky, \"Why We Need the New News Environment to be Chaotic\"</a>",
    "I say to you that the [Video Cassette Recorder, VCR] is to the American film producer and the American public as the Boston strangler is to the woman home alone. - <a href=\"http://cryptome.org/hrcw-hear.htm\">Jack Valenti, President of the Motion Picture Association of America, Inc. (MPAA), Testimony at 1982 House Hearing on Home Recording on Copyrighted Works</a>, giving the MPAA's myopically absurd view of consumer (non)rights.",
    "Man is the only animal that blushes - or needs to. - Mark Twain, Following the Equator",
    "The man with a new idea is a Crank until the idea succeeds. - Mark Twain, Following the Equator",
    "When we were finishing our house, we found we had a little cash left over, on account of the plumber not knowing it. - Mark Twain, The Mysterious Stranger",
    "The bad news is robots can do your job now. The good news is we're now hiring robot repair technicians. The worse news is we're working on robot-fixing robots - and we do not anticipate any further good news. - <a href=\"http://www.despair.com/adaptation.html\">'Adaptation' demotivational poster, Despair, Inc.</a>",
    "There is only one program: 'Hello, World!'.  The rest is maintenance - David A. Wheeler",
    "The bureaucratic mentality is the only constant in the universe.  - Dr. McCoy, Star Trek IV: The Voyage Home",
    "I would be delighted to offer any advice I can on understanding women. When I have some, I’ll let you know. - Captain Picard to Data, Star Trek: The Next Generation, 'In Theory'",
    "It is possible to commit no errors and still lose. That is not a weakness. That is life. - Captain Picard to Data, Star Trek: The Next Generation, 'Peak Performance'",
    "If you are not paying for it, you're not the customer; you're the product being sold. - blue_beetle (Andrew Lewis)",
    "\"Nobody believes the official spokesman... but everybody trusts an unidentified source.\" ~Ron Nelson",
    "\"The source of humor itself is not joy, but sorrow\" - Mark Twain",
    "\"That BBM is free for iOS and Android, and BlackBerry users have to pay for it.\" - Unknown",
    "Some people are poor, all they have is money.",
    "The world's hunger is getting ridiculous. There is more fruit in a rich man's shampoo than in a poor man's plate.",
    "What goes around comes around.",
    "The more you learn, the less you know.",
    "The only true wisdom is in knowing you know nothing.",
    "Intelligent people are full of doubts while the stupid ones are full of confidence.",
    "The less you want, the richer you are...",
    "Have more than you show, speak less than you know. - Shakespeare",
    "'Long live the King! The King is dead'",
    "Change is the only constant.",
    "People were created to be loved. Things were created to be used. The reason why the world is in chaos is because things are being loved and people are being used. — Unknown",
    "The glass is neither half-full nor half-empty: it's twice as big as it needs to be."
 );

 // Similar to:
 // http://www.leancrew.com/all-this/2010/11/smart-quotes-in-javascript/
 // but using HTML entities per
 // http://www.dwheeler.com/essays/quotes-in-html.html
 function smarten(a) {
   a = a.replace(/^'/g, "&#8216;");       // opening singles
   a = a.replace(/([-\s(\["])'/g, "$1&#8216;");       // opening singles
   a = a.replace(/'/g, "&#8217;");                       // closing singles & apostrophes
   a = a.replace(/^"/g, "&#8220;");       // opening singles
   a = a.replace(/([-/\[\s])"/g, "$1&#8220;"); // opening doubles
   a = a.replace(/"/g, "&#8221;");               // closing doubles
   a = a.replace(/--/g, "&mdash;");              // em-dashes
   return a
 };

 function newquote() {
 // Set a new currentquote.
 // The "% 1" deals with buggy Math.random()s that return 1.0.
 var my_pick = Math.floor(quotations.length* (Math.random() % 1));
 var random_quote = "<i>" + smarten(quotations[my_pick]) + "</i>";

 // This actually displays the quote.
 // document.write(random_quote)
 //document.writeln("random_quote");
 document.getElementById("currentquote").innerHTML = random_quote;
 }
