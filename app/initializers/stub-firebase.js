import config from 'hacker-news/config/environment';
import Firebase from 'firebase';
import sinon from 'sinon';

var stubFirebase = function () {
  console.log('stubbing firebase');
  var originalSet = Firebase.prototype.set;
  var originalUpdate = Firebase.prototype.update;

  // check for existing stubbing
  if (!Firebase.prototype.set.restore) {
    sinon.stub(Firebase.prototype, 'set', function(newVal, onComplete) {
      originalSet.call(this, newVal);
      if (typeof onComplete === 'function') {
        setTimeout(onComplete, 0); // maintain async
      }
    });

    sinon.stub(Firebase.prototype, 'update', function(objectToMerge, onComplete) {
      originalUpdate.call(this, objectToMerge);
      if (typeof onComplete === 'function') {
        setTimeout(onComplete, 0);
      }
    });
  }
};


var FixtureData = {
  "topstories": [ 9707170, 9707668, 9705832, 9705830, 9706035, 9705446 ],
  "item": {
    9707170: {
      "by" : "baby",
      "descendants" : 52,
      "id" : 9707170,
      "kids" : [ 9707747, 9707896, 9707348, 9707579, 9707512, 9707602, 9707807, 9707756, 9707755, 9707491, 9707674, 9707400 ],
      "score" : 132,
      "text" : "",
      "time" : 1434128803,
      "title" : "Let's Encrypt Overview",
      "type" : "story",
      "url" : "http://www.cryptologie.net/article/274/lets-encrypt-overview/"
    },
    9707668: {
      "by" : "k8t",
      "descendants" : 24,
      "id" : 9707668,
      "kids" : [ 9707977, 9708199, 9708159, 9708167, 9708188, 9707746, 9707901, 9707953, 9707736, 9707859, 9707753, 9707780, 9707679, 9707957 ],
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
      "descendants" : 200,
      "id" : 9705830,
      "kids" : [ 9706844, 9706073, 9705962, 9706376, 9706139, 9706674, 9706088, 9707014, 9706098, 9706968, 9707175, 9706084, 9706141, 9707614, 9706240, 9708041, 9706101, 9706151, 9705945, 9706819, 9705910, 9705944, 9706112, 9707122, 9706075, 9705900, 9707802, 9707374, 9706602, 9707169, 9707180, 9706155, 9706985, 9705992, 9706769, 9706045, 9705979 ],
      "score" : 194,
      "text" : "",
      "time" : 1434117210,
      "title" : "1980s computer controls Grand Rapids Public School heat and AC",
      "type" : "story",
      "url" : "http://woodtv.com/2015/06/11/1980s-computer-controls-grps-heat-and-ac/"
    },
    9706035:  {
      "by" : "alexggordon",
      "descendants" : 22,
      "id" : 9706035,
      "kids" : [ 9708028, 9707867, 9708083, 9707843, 9707942 ],
      "score" : 69,
      "text" : "",
      "time" : 1434119053,
      "title" : "Being Sneaky in C",
      "type" : "story",
      "url" : "http://www.codersnotes.com/notes/being-sneaky-in-c"
    },
    9705446: {
      "by" : "hunglee2",
      "descendants" : 97,
      "id" : 9705446,
      "kids" : [ 9706196, 9705603, 9708131, 9706318, 9705817, 9705775, 9707984, 9706076, 9705533, 9706375, 9706831, 9706777, 9706678, 9707455, 9705828, 9705635, 9706200, 9705740, 9706723, 9707051, 9706930, 9706422, 9706339, 9706420, 9705535, 9705657, 9706359, 9706510, 9705722, 9706599, 9705582, 9705742, 9706639, 9705758, 9706194, 9706077, 9706481, 9705993, 9706423, 9705914, 9706945, 9706234, 9705527, 9706324 ],
      "score" : 183,
      "text" : "",
      "time" : 1434112676,
      "title" : "Show HN: Retroospect – How was your work week?",
      "type" : "story",
      "url" : "http://www.retroospect.com/"
    }
  },
  "user": {
    "baby": {
      "about" : "intern @ Cryptography Services &#x2F; Matasano &#x2F; NCC Group\ndoing a master of Cryptography in Bordeaux.<p>BLOG: www.cryptologie.net<p>PORTFOLIO: www.davidwong.fr",
      "created" : 1263890147,
      "delay" : 0,
      "id" : "baby",
      "karma" : 1948,
      "submitted" : [ 9708253, 9708163, 9707170 ]
    },
    "k8t": {
      "about" : "",
      "created" : 1429649305,
      "delay" : 0,
      "id" : "k8t",
      "karma" : 45,
      "submitted" : [ 9707966, 9707914, 9707871, 9707777, 9707668, 9455363 ]
    },
    "dmor": {
      "about" : "CEO &amp; Cofounder of Mattermark\nwww.mattermark.com<p>my personal blog&#x2F;site \nwww.daniellemorrill.com<p>I love twitter @DanielleMorrill",
      "created" : 1239833265,
      "delay" : 0,
      "id" : "dmor",
      "karma" : 8200,
      "submitted" : [ 9708201, 9707714, 9705832 ]
    },
    "ScottWRobinson": {
      "about" : "Twitter: @ScottWRobinson\nGithub: https:&#x2F;&#x2F;github.com&#x2F;scottwrobinson\nWeb: http:&#x2F;&#x2F;stackabuse.com",
      "created" : 1432744059,
      "delay" : 0,
      "id" : "ScottWRobinson",
      "karma" : 308,
      "submitted" : [ 9707497, 9707174, 9705959, 9705830 ]
    },
    "alexggordon": {
      "about" : "www.alexggordon.com,\n@alexggordon,\nalex@alexggordon.com<p>[ my public key: https:&#x2F;&#x2F;keybase.io&#x2F;alexggordon; my proof: https:&#x2F;&#x2F;keybase.io&#x2F;alexggordon&#x2F;sigs&#x2F;m9vw2RmDiEpkbPphbq1hwcuJaXAl7My3eWNDXePXMAA ]",
      "created" : 1399305604,
      "delay" : 0,
      "id" : "alexggordon",
      "karma" : 253,
      "submitted" : [ 9706484, 9706228, 9706035 ]
    },
    "hunglee2": {
      "about" : "Starting up, with Workshape.io",
      "created" : 1415923919,
      "delay" : 0,
      "id" : "hunglee2",
      "karma" : 383,
      "submitted" : [ 9705446 ]
    }
  }
};

var initialize = function(/* container, application */) {
  if (config.environment === 'production' || config.stubFirebase !== true) {
    return;
  }

  stubFirebase();
  var ref = new window.Firebase(config.firebase);
  /* goOffline() must be called after creating firebase ref */
  Firebase.goOffline();
  ref.set(FixtureData);
};


export default {
  name: 'stub-firebase',
  before: 'emberfire',
  initialize: initialize
};