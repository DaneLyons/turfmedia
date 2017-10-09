var app = new Vue({
  el: '#app',
  data: {
    defenses: {
      none: 0,
      den: 186,
      hou: 202,
      min: 208,
      ari: 210,
      jax: 215,
      buf: 224,
      chi: 225,
      sea: 226,
      bal: 233,
      lar: 233,
      cin: 238,
      ne: 238,
      phi: 240,
      sf: 241,
      mia: 242,
      pit: 243,
      nyj: 244,
      kc: 247,
      det: 248,
      lac: 249,
      cle: 250,
      tb: 251,
      nyg: 251,
      oak: 258,
      wsh: 258,
      dal: 260,
      ind: 263,
      atl: 267,
      car: 268,
      ten: 269,
      gb: 269,
      no: 274
    },
    lines: [
      {
        index: 0,
        name: 'Drew Bree',
        salary: 17.2,
        color: 'black',
        active: false,
        points: [423,263,376,207,0,465,367,265,323,303,285,310,326,257,389,299,350],
        defenses: ["oak", "nyg", "atl", "lac", "none", "car", "kc", "sea", "sf", 
        "den", "car", "lar", "det", "tb", "ari", "tb", "atl"]
      },
      {
        index: 1,
        name: 'Tom Brady',
        salary: 13.7,
        color: 'black',
        active: false,
        points: [0,0,0,0,406,376,222,315,0,316,280,286,269,406,188,214,276],
        defenses: ["none","none","none","none","cle","cin","pit","buf","none","sea","sf","nyj","lar","bal","den","nyj","mia"]
      },
      {
        index: 2,
        name: 'Matt Ryan',
        salary: 23.7,
        color: 'black',
        active: false,
        points: [334,396,240,503,267,335,273,288,344,267,269,297,237,286,277,331],
        defenses: ["tb","oak","no","car","den","sea","lac","gb","tb","phi","none","ari","kc","lar","sf","car","no"]
      },
      {
        index: 3,
        name: 'Kirk Cousins',
        salary: 0,
        color: 'black',
        active: false,
        points: [329,364,296,183,260,263,301,458,262,375,449,271,234,315,270,287],
        defenses: ["pit","dal","nyg","cle","bal","phi","det","cin","none","min","gb","dal","ari","phi","car","chi","nyg"]
      },
      {
        index: 4,
        name: 'Brock Osweiler',
        salary: 12,
        color: 'black',
        active: true,
        points: [231,268,196,254,184,269,131,186,0,99,243,246,202,147,48,0,253],
        defenses: ["chi", "kc", "ne", "ten", "min", "ind", "den", "det", "none", "jax", "oak", "lac", "gb", "ind", "jax", "none", "ten"]
      },
      {
        index: 5,
        name: 'Trevor Siemian',
        salary: .5,
        color: 'red',
        active: false,
        points: [178,266,312,68,0,230,157,276,283,258,0,368,0,334,282,183,206],
        defenses: ["car","ind","cin","tb","none","lac","hou","lac","oak","no","none","kc","none","ten","ne","kc","oak"]
      },
      {
        index: 6,
        name: 'Aaron Rodgers',
        salary: 0,
        color: 'red',
        active: false,
        points: [199,213,205,0,259,294,326,246,297,371,351,313,209,246,252,347,300],
        defenses: ["jax","min","det","none","nyg","dal","chi","atl","ind","ten","wsh","phi","hou","sea","chi","min","det"]
      },
      {
        index: 7,
        name: 'Philip Rivers',
        salary: 0,
        color: 'red',
        active: false,
        points: [243,220,326,321,359,178,371,267,275,326,0,242,225,236,206,322,269],
        defenses: ["kc","jax","ind","no","oak","den","atl","den","ten","mia","none","hou","tb","car","oak","cle","kc"]
      },
      {
        index: 8,
        name: 'Matthew Stafford',
        salary: 0,
        color: 'red',
        active: false,
        points: [340,260,385,213,180,270,266,240,219,0,278,232,241,223,273,260,347],
        defenses: ["ind","ten","gb","chi","phi","lar","wsh","hou","min","none","jax","min","no","chi","nyg","dal","gb"]
      },
      {
        index: 9,
        name: 'Joe Flacco',
        salary: 0,
        color: 'red',
        active: false,
        points: [258,302,214,298,210,307,248,0,241,296,269,234,381,324,206,262,267],
        defenses: ["buf","cle","jax","oak","wsh","nyg","nyj","none","pit","cle","dal","cin","mia","ne","phi","pit","cin"]
      },
      {
        index: 10,
        name: 'Andrew Luck',
        salary: 0,
        color: 'red',
        active: false,
        points: [385,197,331,234,322,252,353,210,281,0,262,0,278,276,250,288,321],
        defenses: ["det","den","lac","jax","chi","hou","ten","kc","gb","none","ten","none","nyj","hou","min","oak","jax"]
      },
      {
        index: 11,
        name: 'Carson Palmer',
        salary: 0,
        color: 'red',
        active: false,
        points: [271,304,287,288,0,213,342,363,0,376,198,289,300,145,318,284,255],
        defenses: ["ne","tb","buf","lar","none","nyj","sea","car","none","sf","min","atl","wsh","mia","no","sea","lar"]
      },
      {
        index: 12,
        name: 'Russell Wilson',
        salary: 0,
        color: 'red',
        active: false,
        points: [258,254,243,309,0,270,225,253,282,348,272,151,277,240,229,350,258],
        defenses: ["mia","lar","sf","nyj","none","atl","ari","no","buf","ne","phi","tb","car","gb","lar","ari","sf"]
      },
      {
        index: 13,
        name: 'Andy Dalton',
        salary: 0,
        color: 'red',
        active: false,
        points: [366,366,206,296,269,254,308,284,0,204,207,283,332,180,157,268,226],
        defenses: ["nyj","pit","den","mia","dal","ne","cle","wsh","none","nyg","buf","bal","phi","cle","pit","hou","bal"]
      },
      {
        index: 14,
        name: 'Jameis Winston',
        salary: 0,
        color: 'red',
        active: false,
        points: [281,243,405,179,219,0,269,180,261,312,331,220,280,184,247,277,202],
        defenses: ["atl","ari","lar","den","car","none","sf","oak","atl","chi","kc","sea","lac","no","dal","no","car"]
      },
      {
        index: 15,
        name: 'Eli Manning',
        salary: 0,
        color: 'red',
        active: false,
        points: [207,368,350,261,199,403,196,0,257,240,227,194,195,193,201,356,180],
        defenses: ["dal","no","wsh","min","gb","bal","lar","none","phi","cin","chi","cle","pit","dal","det","phi","wsh"]
      },
      {
        index: 16,
        name: 'Derek Carr',
        salary: 0,
        color: 'red',
        active: false,
        points: [319,299,249,199,317,225,200,513,184,0,295,315,260,117,213,232,0],
        defenses: ["no","atl","ten","bal","lac","kc","jax","tb","den","none","hou","car","buf","kc","lac","ind","none"]
      },
      {
        index: 17,
        name: 'Blake Bortles',
        salary: 0,
        color: 'red',
        points: [320,329,194,207,0,271,246,337,252,265,202,126,181,257,92,325,301],
        defenses: ["gb","lac","bal","ind","none","chi","oak","ten","kc","hou","det","buf","den","min","hou","ten","ind"]
      },
      {
        index: 18,
        name: 'Sam Bradford',
        salary: 0,
        color: 'red',
        points: [0,286,171,262,271,0,224,228,273,307,169,224,247,292,291,382,250],
        defenses: ["none","gb","car","nyg","hou","none","phi","chi","det","wsh","ari","det","dal","jax","ind","gb","chi"]
      },
      {
        index: 19,
        name: 'Ben Roethlisberger',
        salary: 0,
        color: 'red',
        points: [300,259,257,300,380,189,0,0,264,408,167,221,289,220,286,279,0],
        defenses: ["wsh","cin","phi","kc","nyj","mia","none","none","bal","dal","cle","ind","nyg","buf","cin","bal","none"]
      },
      {
        index: 20,
        name: 'Carson Wentz',
        salary: 0,
        color: 'red',
        points: [278,190,301,0,238,179,138,202,364,231,218,254,308,314,170,152,245],
        defenses: ["cle","chi","pit","none","det","wsh","min","dal","nyg","atl","sea","gb","cin","wsh","bal","nyg","dal"]
      },
      {
        index: 21,
        name: 'Dak Prescott',
        salary: 0,
        color: 'red',
        points: [227,292,248,245,227,247,0,287,247,319,301,195,139,165,279,212,37],
        defenses: ["nyg","wsh","chi","sf","cin","gb","none","phi","cle","pit","bal","wsh","min","nyg","tb","det","phi"]
      },
      {
        index: 22,
        name: 'Cam Newton',
        salary: 0,
        color: 'red',
        points: [194,353,262,165,0,322,0,212,225,261,192,246,182,160,300,198,237],
        defenses: ["den","sf","min","atl","none","no","none","ari","lar","kc","no","oak","sea","lac","wsh","atl","tb"]
      },
      {
        index: 23,
        name: 'Alex Smith',
        salary: 0,
        color: 'red',
        points: [363,186,237,287,0,224,214,127,0,178,261,220,270,264,163,244,264],
        defenses: ["lac","hou","nyj","pit","none","oak","no","ind","none","car","tb","den","atl","oak","ten","den","lac"]
      },
      {
        index: 24,
        name: 'Marcus Mariota',
        salary: 0,
        color: 'red',
        points: [271,238,214,202,163,284,232,270,313,295,290,226,0,88,241,99,0],
        defenses: ["min","det","oak","hou","mia","cle","ind","jax","lac","gb","ind","chi","none","den","kc","jax","none"]
      },
      {
        index: 16,
        name: '',
        salary: 0,
        color: 'red',
        points: [],
        defenses: []
      },
      {
        index: 16,
        name: '',
        salary: 0,
        color: 'red',
        points: [],
        defenses: []
      },
      {
        index: 16,
        name: '',
        salary: 0,
        color: 'red',
        points: [],
        defenses: []
      },
      {
        index: 16,
        name: '',
        salary: 0,
        color: 'red',
        points: [],
        defenses: []
      }
    ]
  },
  methods: {
    graphLine: function(index) {
      var points = this.lines[index].points;
      var salary = this.lines[index].salary;
      var width = 799;
      var height = 500;
      var maxYards = 6000;
      var xStep = width / points.length;
      var yStep = height / maxYards;
      var x = 0;
      var y = 299;
      var path = "M0 299";
      for(var i=0;i<points.length;i++){
        x += xStep;
        //path += `L ${x} ${y}`;
        y -= points[i] * yStep;
        path += `L ${x} ${y}`;
      }

      return path;
    },
    graphLineDiff: function(index) {
      var points = this.lines[index].points;
      var defenses = this.lines[index].defenses;
      var salary = this.lines[index].salary;
      var width = 799;
      var height = 500;
      var maxYards = 2600;
      var xStep = width / points.length;
      var yStep = height / maxYards;
      var x = 0;
      var y = 249;
      var totalYards = 0;
      var netYards = 0;
      var path = "M0 249";
      for(var i=0;i<points.length;i++){
        var defense = defenses[i];
        var yards = points[i];
        var net = yards - this.defenses[defense];
        totalYards += yards;
        netYards += net;
        x += xStep;

        console.log(yards,net);
        //path += `L ${x} ${y}`;
        //y -= points[i] * yStep;
        y -= net * yStep;
        path += `L ${x} ${y}`;
      }

      //console.log(this.lines[index].name, totalYards, netYards);

      return path;
    }
  },
  computed: {
    activeLines: function() {
      return this.lines.filter(function (line) {
        return line.active
      })
    },
    inactiveLines: function() {
      return this.lines.filter(function (line) {
        return !line.active
      })
    }
  }
})