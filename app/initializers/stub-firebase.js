import ENV from 'hacker-news/config/environment';
import Firebase from 'firebase';
import sinon from 'sinon';

const { Logger } = Ember;


let stubFirebase = function () {
  Logger.info('Stubbing firebase');

  // check for existing stubbing
  if (!Firebase.prototype.set.restore) {
    let originalSet = Firebase.prototype.set;

    sinon.stub(Firebase.prototype, 'set', function(newVal, onComplete) {
      originalSet.call(this, newVal);
      if (typeof onComplete === 'function') {
        setTimeout(onComplete, 0); // maintain async
      }
    });
  }

  if (!Firebase.prototype.update.restore) {
    let originalUpdate = Firebase.prototype.update;

    sinon.stub(Firebase.prototype, 'update', function(objectToMerge, onComplete) {
      originalUpdate.call(this, objectToMerge);
      if (typeof onComplete === 'function') {
        setTimeout(onComplete, 0);
      }
    });
  }
};


let FixtureData = {
  "topstories": [ 9707170, 9707668, 9705832, 9705830, 9706035, 9705446, 9706633, 9707190, 9705780, 9706882, 9707918 ],
  "item": {
    9707170: {
      "by" : "baby",
      "descendants" : 7,
      "id" : 9707170,
      "kids" : [ 9707747 ],
      "score" : 132,
      "text" : "",
      "time" : 1434128803,
      "title" : "Let's Encrypt Overview",
      "type" : "story",
      "url" : "http://www.cryptologie.net/article/274/lets-encrypt-overview/"
    },
    9707668: {
      "by" : "k8t",
      "descendants" : 5,
      "id" : 9707668,
      "kids" : [ 9707977 ],
      "score" : 52,
      "text" : "",
      "time" : 1434133570,
      "title" : "PurifyCSS – Remove unused CSS",
      "type" : "story",
      "url" : "https://github.com/purifycss/purifycss"
    },
    9705832: {
      "by" : "dmor",
      "descendants" : 4,
      "id" : 9705832,
      "kids" : [ 9707750, 9708001 ],
      "score" : 60,
      "text" : "",
      "time" : 1434117227,
      "title" : "Financial Indicators for Startups at Every Stage",
      "type" : "story",
      "url" : "http://mattermark.com/important-financial-indicators-for-startups-at-every-stage-of-growth/"
    },
    9705830: {
      "by" : "ScottWRobinson",
      "descendants" : 0,
      "id" : 9705830,
      "score" : 194,
      "text" : "",
      "time" : 1434117210,
      "title" : "1980s computer controls Grand Rapids Public School heat and AC",
      "type" : "story",
      "url" : "http://woodtv.com/2015/06/11/1980s-computer-controls-grps-heat-and-ac/"
    },
    9706035:  {
      "by" : "alexggordon",
      "descendants" : 0,
      "id" : 9706035,
      "score" : 69,
      "text" : "",
      "time" : 1434119053,
      "title" : "Being Sneaky in C",
      "type" : "story",
      "url" : "http://www.codersnotes.com/notes/being-sneaky-in-c"
    },
    9705446: {
      "by" : "hunglee2",
      "descendants" : 0,
      "id" : 9705446,
      "score" : 183,
      "text" : "",
      "time" : 1434112676,
      "title" : "Show HN: Retroospect – How was your work week?",
      "type" : "story",
      "url" : "http://www.retroospect.com/"
    },
    9706633: {
      "by" : "bowlingx",
      "descendants" : 0,
      "id" : 9706633,
      "score" : 71,
      "text" : "",
      "time" : 1434124352,
      "title" : "Show HN: A DOM text-selection highlight renderer",
      "type" : "story",
      "url" : "http://bowlingx.github.io/marklib/"
    },
    9707190: {
      "by" : "steveridout",
      "descendants" : 0,
      "id" : 9707190,
      "score" : 74,
      "text" : "",
      "time" : 1434128951,
      "title" : "Show HN: Readlang – Learn a language while you surf the web",
      "type" : "story",
      "url" : "http://readlang.com/"
    },
    9705780: {
      "by" : "freeasinspeech",
      "descendants" : 0,
      "id" : 9705780,
      "score" : 131,
      "text" : "",
      "time" : 1434116676,
      "title" : "Securing access to Wikimedia sites with HTTPS by default",
      "type" : "story",
      "url" : "https://blog.wikimedia.org/2015/06/12/securing-wikimedia-sites-with-https/"
    },
    9706882: {
      "by" : "minimaxir",
      "descendants" : 0,
      "id" : 9706882,
      "score" : 39,
      "text" : "",
      "time" : 1434126352,
      "title" : "What Broke the Magic Online Economy?",
      "type" : "story",
      "url" : "http://www.channelfireball.com/articles/what-broke-the-magic-online-economy/"
    },
    9707918: {
      "by" : "sergeant3",
      "descendants" : 0,
      "id" : 9707918,
      "score" : 43,
      "text" : "",
      "time" : 1434135958,
      "title" : "The Dalai Lama’s Daily Routine and Information Diet",
      "type" : "story",
      "url" : "http://www.brainpickings.org/2015/06/09/pico-iyer-the-open-road-dalai-lama/"
    },


    9707747: {
      "by" : "diafygi",
      "id" : 9707747,
      "kids" : [ 9707985, 9708329, 9708249 ],
      "parent" : 9707170,
      "text" : "FYI, if you don&#x27;t want to install the official Let&#x27;s Encrypt client on your production server, I created a simple python script that will automate the ACME process for you. It doesn&#x27;t have to run on your server, and it doesn&#x27;t ask for your private keys.<p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;diafygi&#x2F;letsencrypt-nosudo\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;diafygi&#x2F;letsencrypt-nosudo</a><p>The only thing that has to be run as sudo on your production server is a simple python one-liner that temporarily serves the required file. The script prints out this one-liner so you can copy and paste it into your server&#x27;s terminal, then kill it when the challenge is done.",
      "time" : 1434134299,
      "type" : "comment"
    },
    9707985: {
      "by" : "garrettr_",
      "id" : 9707985,
      "kids" : [ 9708226 ],
      "parent" : 9707747,
      "text" : "How is this different from&#x2F;superior to Let&#x27;s Encrypt&#x27;s built-in &quot;standalone authenticator&quot;? [0]<p>[0] <a href=\"https:&#x2F;&#x2F;github.com&#x2F;letsencrypt&#x2F;lets-encrypt-preview&#x2F;blob&#x2F;master&#x2F;letsencrypt&#x2F;plugins&#x2F;standalone&#x2F;authenticator.py\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;letsencrypt&#x2F;lets-encrypt-preview&#x2F;blob&#x2F;mas...</a>",
      "time" : 1434136771,
      "type" : "comment"
    },
    9708226: {
      "by" : "diafygi",
      "id" : 9708226,
      "parent" : 9707985,
      "text" : "The standalone authenticator still requires (1) installing&#x2F;running the letsencrypt client on your production server, (2) letting it run as root, and (3) letting it access your private keys. My script requires none of these things.",
      "time" : 1434139749,
      "type" : "comment"
    },
    9708329: {
      "by" : "bradbeattie",
      "id" : 9708329,
      "kids" : [ 9708397 ],
      "parent" : 9707747,
      "text" : "The overview speaks of a &quot;here&#x27;s my key!&quot; &#x2F; &quot;you are registered!&quot; step that letsencrypt-nosudo doesn&#x27;t seem to have. It seems that your first communication with the CA is during step 2 (requesting challenges). Does this affect your script&#x27;s ability to do things like subject alternative names?",
      "time" : 1434141092,
      "type" : "comment"
    },
    9708397: {
      "by" : "diafygi",
      "id" : 9708397,
      "parent" : 9708329,
      "text" : "This script takes certificate signing requests (CSR) as input. If you want a subject alternative name, it&#x27;s up to you to add that to your CSR file before you run the script.<p>The official Let&#x27;s Encrypt client is mostly focused on ease of use. This script is mostly focused on not knowing your secrets or requiring privileged access, and it assumes you know what a CSR is and how to install a signed certificate on your webserver.",
      "time" : 1434141690,
      "type" : "comment"
    },
    9708249: {
      "by" : "JoshTriplett",
      "id" : 9708249,
      "kids" : [ 9708438 ],
      "parent" : 9707747,
      "text" : "Does your script support doing the DVSNI challenge instead, to avoid needing to install a file on the web server?",
      "time" : 1434140057,
      "type" : "comment"
    },
    9708438: {
      "by" : "diafygi",
      "id" : 9708438,
      "parent" : 9708249,
      "text" : "It used to, but that meant you had to scp the generated dvsni cert to your server[1], which is more complex than asking the user to start serving a string over a specific url (which is what the SimpleHTTP challenge requires).<p>[1]: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;diafygi&#x2F;letsencrypt-nosudo&#x2F;blob&#x2F;9607deb7b259499725ce1c705a1664199f51881d&#x2F;sign_csr.py#L149\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;diafygi&#x2F;letsencrypt-nosudo&#x2F;blob&#x2F;9607deb7b...</a>",
      "time" : 1434142085,
      "type" : "comment"
    },

    9707977: {
      "by" : "simonw",
      "id" : 9707977,
      "kids" : [ 9707999, 9708304 ],
      "parent" : 9707668,
      "text" : "I&#x27;ve been looking into this kind of tool for a while, but none of them are quite right for my purpose. I don&#x27;t want a tool that spits out just-the-CSS-that-is-used, I want a tool that shows me blocks of CSS that it thinks are NOT used - ideally after I&#x27;ve loaded a number of different pages in a browser.<p>My use-case is for analyzing a large, existing website that has many years of accumulating CSS, and getting a feel for which blocks of code can be safely eliminated.<p>I&#x27;m pretty sure what I&#x27;m after needs a full-blown DOM to work effectively - either with something like PhantomJS or even running as a Chrome Extension. So far I haven&#x27;t seen anything that fits the bill.",
      "time" : 1434136721,
      "type" : "comment"
    },
    9707999: {
      "by" : "Zikes",
      "id" : 9707999,
      "kids" : [ 9708031, 9708108 ],
      "parent" : 9707977,
      "text" : "I honestly think this needs to be a part of Chrome Dev Tools&#x27;s profiler.  Already it&#x27;s able to record sessions that persist across page loads, and tracks what CSS selectors are applied and which properties are overridden.  I don&#x27;t think it&#x27;s much of a stretch to add a feature like this.",
      "time" : 1434136890,
      "type" : "comment"
    },
    9708031: {
      "by" : "spanktar",
      "id" : 9708031,
      "kids" : [ 9708088 ],
      "parent" : 9707999,
      "text" : "+1 for something along these lines to be available in all vendor&#x27;s dev tools!",
      "time" : 1434137234,
      "type" : "comment"
    },
    9708088: {
      "by" : "WhiteNoiz3",
      "id" : 9708088,
      "parent" : 9708031,
      "text" : "Agreed! We need something that collects data from multiple pages as you browse through and use your site. At the end it gives you a table of all your classes that didn&#x27;t match anything (with line number references to your css file).",
      "time" : 1434137901,
      "type" : "comment"
    },
    9708108: {
      "deleted" : true,
      "id" : 9708108,
      "parent" : 9707999,
      "time" : 1434138212,
      "type" : "comment"
    },
    9708304: {
      "by" : "geuis",
      "id" : 9708304,
      "parent" : 9707977,
      "text" : "<a href=\"https:&#x2F;&#x2F;github.com&#x2F;geuis&#x2F;helium-css\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;geuis&#x2F;helium-css</a>",
      "time" : 1434140806,
      "type" : "comment"
    },

    9707750: {
      "by" : "birken",
      "id" : 9707750,
      "kids" : [ 9708269 ],
      "parent" : 9705832,
      "text" : "This doubles as a good lesson for somebody considering joining a startup, and kudos to them for being fully transparent about it.  You should always ask to see the graph they&#x27;ve presented here, a graph with historical burn, revenue and months of runway left.  Otherwise it is very difficult to figure out how much risk you are taking by joining.  Because if the runway starts getting short and the startup need to &quot;control expenses&quot;, that means laying you off.<p>&gt; Generally, I think controlling expenses is a lot easier than figuring out how to make more money.<p>A key point.  If your salary is coming out of future predicted revenue growth, and that growth doesn&#x27;t happen, your expense is going to be controlled.<p>I&#x27;m not suggesting startups shouldn&#x27;t be aggressive with spending, nor suggesting employees shouldn&#x27;t take risks when joining startups.  But you should ensure that, as an employee, you are compensated for the risk you are taking.  And this graph is a great way to see exactly how aggressive the startup is being with their spending.",
      "time" : 1434134318,
      "type" : "comment"
    },
    9708269: {
      "by" : "7S-ymVNwEwE-",
      "id" : 9708269,
      "parent" : 9707750,
      "text" : "<p><pre><code>  &gt; But you should ensure that, as an employee, you are \n  &gt; compensated for the risk you are taking.\n</code></pre>\n&quot;Oh no I lost my job&quot; risk is already priced into current market-rate salaries. A startup may have a greater chance of laying off an employee, but the risk to the employee must also consider how quickly they&#x27;re able to get another job at market rates. If the job market is tight, the risk is much lower.<p>What is unwise is to accept less than a market rate salary plus deferred compensation without thinking like an investor. At the very least one should consider how much their time is worth relative to the cost of investing, i.e. &quot;H hours of my time at market rates is worth $D, therefore if I were investing $D of my time into this startup I&#x27;d receive C common shares.&quot;",
      "time" : 1434140382,
      "type" : "comment"
    },
    9708001: {
      "by" : "seekingcharlie",
      "id" : 9708001,
      "kids" : [ 9708077, 9708201 ],
      "parent" : 9705832,
      "text" : "Would one say that these metrics should be reported on by founders to employees throughout a startup&#x27;s lifecycle?<p>As an employee, should you know your own company&#x27;s burn rate each month for example?",
      "time" : 1434136905,
      "type" : "comment"
    },
    9708077: {
      "by" : "mjbellantoni",
      "id" : 9708077,
      "parent" : 9708001,
      "text" : "Absolutely.  This should also be on the list of questions you should ask before you go to work at a startup.  You probably wouldn&#x27;t ask these on a first interview, but as you get close to the offer stage asking questions about money in the bank, burn rate, cash out date and such are fair game.<p>If the company will not answer those questions, that in itself is useful data for guiding your decision making. :)",
      "time" : 1434137798,
      "type" : "comment"
    },
    9708201: {
      "by" : "dmor",
      "id" : 9708201,
      "parent" : 9708001,
      "text" : "I think it varies in terms of what companies do, but I loved having this visibility at Twilio from our CEO while I was there so I brought the practice with me at Mattermark. It always made me feel like I had a better understanding of the trade-offs we were making and level of risk, and I hope it brings the same feelings and thoughts to my team.",
      "time" : 1434139529,
      "type" : "comment"
    }
  },
  "user": {
    "baby": {
      "about" : "intern @ Cryptography Services &#x2F; Matasano &#x2F; NCC Group\ndoing a master of Cryptography in Bordeaux.<p>BLOG: www.cryptologie.net<p>PORTFOLIO: www.davidwong.fr",
      "created" : 1263890147,
      "delay" : 0,
      "id" : "baby",
      "karma" : 1948,
      "submitted" : [ 9707170 ]
    },
    "k8t": {
      "about" : "",
      "created" : 1429649305,
      "delay" : 0,
      "id" : "k8t",
      "karma" : 45,
      "submitted" : [ 9707668 ]
    },
    "dmor": {
      "about" : "CEO &amp; Cofounder of Mattermark\nwww.mattermark.com<p>my personal blog&#x2F;site \nwww.daniellemorrill.com<p>I love twitter @DanielleMorrill",
      "created" : 1239833265,
      "delay" : 0,
      "id" : "dmor",
      "karma" : 8200,
      "submitted" : [ 9705832, 9708201 ]
    },
    "ScottWRobinson": {
      "about" : "Twitter: @ScottWRobinson\nGithub: https:&#x2F;&#x2F;github.com&#x2F;scottwrobinson\nWeb: http:&#x2F;&#x2F;stackabuse.com",
      "created" : 1432744059,
      "delay" : 0,
      "id" : "ScottWRobinson",
      "karma" : 308,
      "submitted" : [ 9705830 ]
    },
    "alexggordon": {
      "about" : "www.alexggordon.com,\n@alexggordon,\nalex@alexggordon.com<p>[ my public key: https:&#x2F;&#x2F;keybase.io&#x2F;alexggordon; my proof: https:&#x2F;&#x2F;keybase.io&#x2F;alexggordon&#x2F;sigs&#x2F;m9vw2RmDiEpkbPphbq1hwcuJaXAl7My3eWNDXePXMAA ]",
      "created" : 1399305604,
      "delay" : 0,
      "id" : "alexggordon",
      "karma" : 253,
      "submitted" : [ 9706035 ]
    },
    "hunglee2": {
      "about" : "Starting up, with Workshape.io",
      "created" : 1415923919,
      "delay" : 0,
      "id" : "hunglee2",
      "karma" : 383,
      "submitted" : [ 9705446 ]
    },
    "simonw": {
      "about" : "http:&#x2F;&#x2F;simonwillison.net&#x2F; http:&#x2F;&#x2F;hackernewsers.com&#x2F;users&#x2F;simonw.html<p>d13b2ac1c6b22c9a1557ee5a5dd4f41855f65133",
      "created" : 1193660603,
      "delay" : 0,
      "id" : "simonw",
      "karma" : 10218,
      "submitted" : [ 9707977 ]
    },
    "Zikes": {
      "about" : "zikes@zikes.me",
      "created" : 1326408406,
      "delay" : 0,
      "id" : "Zikes",
      "karma" : 5774,
      "submitted" : [ 9707999 ]
    },
    "spanktar": {
      "created" : 1413845781,
      "delay" : 0,
      "id" : "spanktar",
      "karma" : 84,
      "submitted" : [ 9708031 ]
    },
    "WhiteNoiz3": {
      "created" : 1380562408,
      "delay" : 0,
      "id" : "WhiteNoiz3",
      "karma" : 17,
      "submitted" : [ 9708088 ]
    },
    "geuis": {
      "about" : "Site: http:&#x2F;&#x2F;geuis.com<p>Twitter: http:&#x2F;&#x2F;twitter.com&#x2F;geuis\nEmail: geuis.teses@gmail.com<p>Projects:\nhttp:&#x2F;&#x2F;jsonip.com\nhttp:&#x2F;&#x2F;popped.at\nhttp:&#x2F;&#x2F;github.com&#x2F;geuis&#x2F;helium-css\nhttp:&#x2F;&#x2F;code.google.com&#x2F;p&#x2F;fathomer&#x2F;",
      "created" : 1206394412,
      "delay" : 0,
      "id" : "geuis",
      "karma" : 8926,
      "submitted" : [ 9708304 ]
    },
    "birken": {
      "about" : "VP of Engineering @ Thumbtack, 2009-2013<p>Software Engineer @ Google, 2007-2009<p>birken@gmail.com &#x2F; @danbirken &#x2F; danbirken.com",
      "created" : 1271836645,
      "delay" : 0,
      "id" : "birken",
      "karma" : 2400,
      "submitted" : [ 9707750 ]
    },
    "7S-ymVNwEwE-": {
      "created" : 1434056900,
      "delay" : 0,
      "id" : "7S-ymVNwEwE-",
      "karma" : 3,
      "submitted" : [ 9708269 ]
    },
    "seekingcharlie": {
      "about" : "Designer | Dreamer | angelasmith.com.au",
      "created" : 1399231290,
      "delay" : 0,
      "id" : "seekingcharlie",
      "karma" : 113,
      "submitted" : [ 9708001 ]
    },
    "mjbellantoni": {
      "about" : "http:&#x2F;&#x2F;www.matthewbellantoni.com",
      "created" : 1308256163,
      "delay" : 0,
      "id" : "mjbellantoni",
      "karma" : 448,
      "submitted" : [ 9708077 ]
    },
    "diafygi": {
      "about" : "Co-founder of UtilityAPI.com<p>Website: https:&#x2F;&#x2F;daylightpirates.org&#x2F;<p>PGP public key: https:&#x2F;&#x2F;pgp.mit.edu&#x2F;pks&#x2F;lookup?search=diafygi<p>[ my public key: https:&#x2F;&#x2F;keybase.io&#x2F;diafygi; my proof: https:&#x2F;&#x2F;keybase.io&#x2F;diafygi&#x2F;sigs&#x2F;Zh2GEdKMDvPsNqLfN-2z8x1CWZ4D4-sng4qQvfIrj6U ]",
      "created" : 1305565086,
      "delay" : 0,
      "id" : "diafygi",
      "karma" : 3444,
      "submitted" : [ 9707747, 9708226, 9708397, 9708438 ]
    },
    "garrettr_": {
      "about" : "",
      "created" : 1427137375,
      "delay" : 0,
      "id" : "garrettr_",
      "karma" : 29,
      "submitted" : [ 9707985 ]
    },
    "bradbeattie": {
      "about" : "https:&#x2F;&#x2F;modernballots.com",
      "created" : 1260912552,
      "delay" : 0,
      "id" : "bradbeattie",
      "karma" : 163,
      "submitted" : [ 9708329 ]
    },
    "JoshTriplett": {
      "about" : "Email: josh@joshtriplett.org<p>Homepage: https:&#x2F;&#x2F;joshtriplett.org<p>Twitter: @josh_triplett<p>Speaking only for myself.",
      "created" : 1264446488,
      "delay" : 0,
      "id" : "JoshTriplett",
      "karma" : 10763,
      "submitted" : [ 9708249 ]
    },
    "bowlingx": {
      "about" : "",
      "created" : 1430930879,
      "delay" : 0,
      "id" : "bowlingx",
      "karma" : 73,
      "submitted" : [ 9706633 ]
    },
    "steveridout": {
      "about" : "Software Engineer, I was one of the original desktop developers at Mendeley.<p>Now working independently on a site for learning languages: http://readlang.com<p>http://steveridout.com",
      "created" : 1352450220,
      "delay" : 0,
      "id" : "steveridout",
      "karma" : 478,
      "submitted" : [ 9707190 ]
    },
    "freeasinspeech": {
      "created" : 1389799424,
      "delay" : 0,
      "id" : "freeasinspeech",
      "karma" : 113,
      "submitted" : [ 9705780 ]
    },
    "minimaxir": {
      "about" : "Max Woolf - Software QA Engineer, Carnegie Mellon University business graduate (2012), San Francisco Bay Area resident, sarcastic tech blog commentator<p>@minimaxir<p>http:&#x2F;&#x2F;minimaxir.com<p>max [at] minimaxir.com",
      "created" : 1332620100,
      "delay" : 0,
      "id" : "minimaxir",
      "karma" : 10207,
      "submitted" : [ 9706882 ]
    },
    "sergeant3": {
      "about" : "",
      "created" : 1420749762,
      "delay" : 0,
      "id" : "sergeant3",
      "karma" : 2629,
      "submitted" : [ 9707918 ]
    }
  }
};


let initialize = function(/* container, application */) {
  if (ENV.environment === 'production' || ENV.stubFirebase !== true) {
    return;
  }

  stubFirebase();

  let ref = new window.Firebase(ENV.firebase);
  Firebase.goOffline();
  ref.set(FixtureData);
};


export default {
  name: 'stub-firebase',
  before: 'emberfire',
  initialize: initialize
};