
(function() {
  window.Bandoneon = {};
})();

/**
 * Keyboard Layout
 */

Bandoneon.layout = {

  'right': {

    'pull': {

      'b4': [207, 39],
      'g#4': [312, 34],
      'g4': [429, 34],
      'f4': [538, 42],
      'c#2': [160, 96],
      'a4': [256, 87],
      'f#4': [361, 87],
      'e4': [480, 87],
      'd#4': [571, 102],
      'c2': [118, 153],
      'd2': [210, 141],
      'g2': [309, 132],
      'a#3': [415, 136],
      'c4': [516, 147],
      'd4': [615, 162],
      'b1': [70, 222],
      'e2': [163, 205],
      'c#3': [264, 195],
      'f#2': [360, 190],
      'a2': [457, 195],
      'c3': [559, 205],
      'e3': [651, 225],
      'a1': [33, 288],
      'f2': [123, 268],
      'a#2': [213, 258],
      'g#2': [306, 249],
      'b2': [396, 246],
      'd3': [499, 250],
      'g#3': [591, 267],
      'b3': [690, 289],
      'a#1': [81, 342],
      'd#2': [171, 321],
      'f3': [262, 307],
      'd#3': [352, 301],
      'f#3': [447, 303],
      'a3': [538, 312],
      'c#4': [628, 327],
      'g3': [714, 357]
    },

    'push': {

      'a4': [207, 39],
      'g#4': [312, 34],
      'f#4': [429, 34],
      'f4': [538, 42],
      'c2': [160, 96],
      'g4': [256, 87],
      'a#3': [361, 87],
      'c4': [480, 87],
      'd#4': [571, 102],
      'd2': [118, 153],
      'c#2': [210, 141],
      'g#2': [309, 132],
      'a#2': [415, 136],
      'c3': [516, 147],
      'd4': [615, 162],
      'b1': [70, 222],
      'f#2': [163, 205],
      'f#3': [264, 195],
      'g2': [360, 190],
      'b2': [457, 195],
      'd3': [559, 205],
      'g3': [651, 225],
      'a1': [33, 288],
      'f2': [123, 268],
      'e2': [213, 258],
      'a2': [306, 249],
      'c#3': [396, 246],
      'b2 ': [499, 250],
      'a3': [591, 267],
      'c#4': [690, 289],
      'a#1': [81, 342],
      'd#2': [171, 321],
      'f3': [262, 307],
      'e3': [352, 301],
      'g#3': [447, 303],
      'b3': [538, 312],
      'e4': [628, 327],
      'd#3': [714, 357]
    }
  
  },

  'left': {

    'pull': {

      'g#0': [198, 52],
      'a#0': [295, 37],
      'c#1': [405, 36],
      'f1': [520, 37],
      'g#2': [621, 46],
      'e0': [67, 130],
      'a0': [153, 117],
      'g1': [252, 99],
      'd#1': [357, 91],
      'f2': [462, 87],
      'a#1': [568, 99],
      'f0': [666, 108],
      'd1': [115, 190],
      'a1': [208, 171],
      'c2': [313, 163],
      'e2': [414, 150],
      'c1': [513, 153],
      'g0': [615, 160],
      'e1': [73, 259],
      'g#1': [169, 241],
      'b1': [270, 228],
      'd2': [366, 216],
      'f#2': [465, 216],
      'c#2': [565, 223],
      'f#0': [660, 229],
      'd0': [39, 342],
      'b0': [133, 316],
      'g2': [228, 297],
      'a2': [324, 277],
      'd#2': [420, 277],
      'f#1': [519, 283],
      'd#0': [612, 291],
      'c0': [706, 303]
    },

    'push': {

      'g#0': [198, 52],
      'a#0': [295, 37],
      'd#1': [405, 36],
      'd#2': [520, 37],
      'g2': [621, 46],
      'd0': [67, 130],
      'd1': [153, 117],
      'a#1': [252, 99],
      'c2': [357, 91],
      'c#1': [462, 87],
      'c1': [568, 99],
      'f#0': [666, 108],
      'g0': [115, 190],
      'g1': [208, 171],
      'b1': [313, 163],
      'd2': [414, 150],
      'f2': [513, 153],
      'f#1': [615, 160],
      'a0': [73, 259],
      'e1': [169, 241],
      'a1': [270, 228],
      'c#2': [366, 216],
      'e2': [465, 216],
      'g#1': [565, 223],
      'b0': [660, 229],
      'e0': [39, 342],
      'e1 ': [133, 316],
      'f#2': [228, 297],
      'g#2': [324, 277],
      'b2': [420, 277],
      'f1': [519, 283],
      'c#0': [612, 291],
      'f0': [706, 303]
    }

  }

};


/**
 * Key names
 */

Bandoneon.keys = [ 
  
  'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'

];


/**
 * Available modes
 */

Bandoneon.modes = {

  'major': [ 2, 2, 1, 2, 2, 2, 1 ],
  'minor': [ 2, 1, 2, 2, 1, 2, 2 ],
  'chromatic': [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]

};


/**
 * Helper functions
 */

Bandoneon.utils = {

  // Build a scale of a key, octave and mode, e.g. ('d', 3, 'major')
  scale: function(key, octave, mode) {
    var pos = Bandoneon.keys.indexOf(key);
    if (pos === -1) return [];

    var intervals = Bandoneon.modes[mode];
    if (typeof intervals === 'undefined') return [];

    var scale = [];
    for (var s in intervals) {
      scale.push(Bandoneon.keys[pos] + '' + octave);
      pos += intervals[s];
      if (pos >= Bandoneon.keys.length) {
        octave++;
      }
      pos %= Bandoneon.keys.length;
    }

    return scale;
  }

};


/**
 * Backbone model and view
 */

$(function() {

  var scaleColors = ['blue', 'red', 'green', 'orange', 'blue'];
  var octaveColors = ['#bcf', '#fdc', '#cfc', '#fea'];

  var AppModel = Backbone.Model.extend({

    defaults: {
      direction: 'pull',
      side: 'right',
      key: null,
      mode: null
    },

    initialize: function() { }

  });

  var AppView = Backbone.View.extend({

    paper: null,
    showOctaveColors: false,

    el: document.getElementById('container'),

    events: {
      "click #toggle-colorbuttons": "toggleOctaveColors"
    },

    initialize: function() {
      this.paper = Raphael(this.el, 800, 450);
      this.render();
      this.model.bind('change', this.render, this);
    },

    renderButtons: function(side, direction) {
      var layout = _.clone(Bandoneon.layout[side][direction]);

      // Draw buttons
      for (var k in layout) {
        var label = k;

        // label
        var l = label[0];
        var octave = label[1];
        if (label[1] == '#') {
          octave = label[2];
        }
        if (octave === 0) l = label[0].toUpperCase();
        if (label[1] == '#') l += '♯';
        else if (label[1] == 'b') l += '♭';
        if (octave === 1) l += '';
        else if (octave === 2) l += 'ʹ';
        else if (octave === 3) l += 'ʹʹ';
        else if (octave === 4) l += 'ʹʹʹ';

        var fill = (this.showOctaveColors ? octaveColors[octave % (octaveColors.length)] : 'white');

        this.paper.circle(layout[k][0] + 30, layout[k][1] + 30, 30)
          .attr({
            'stroke-width': 2,
            'fill': fill
          });

        this.paper.text(layout[k][0] + 30, layout[k][1] + 30, l)
          .attr({
            'font-family': 'serif',
            'font-size': 21,
            'font-style': 'italic',
            'cursor': 'default'
          });
      }
    },

    renderScale: function(side, direction, scale, color) {
      var layout = _.clone(Bandoneon.layout[side][direction]);
      if (!layout) return;

      var pathString = '';
      for (var t in scale) {
        if (layout.hasOwnProperty(scale[t])) {
          pathString += (pathString === '')?'M':'L';
          pathString += layout[scale[t]][0] + 30;
          pathString += ',';
          pathString += layout[scale[t]][1] + 30;
        }
      }

      if (pathString === '') return;

      return this.paper.path(pathString)
        .attr({
          'stroke': color,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 7,
          'stroke-opacity': 0.33
        });
    },

    render: function() {
      var side = this.model.get('side');
      var direction = this.model.get('direction');
  
      if (!side || !direction) return;

      this.paper.clear();
      this.renderButtons(side, direction);

      var key = this.model.get('key');
      var mode = this.model.get('mode');

      if (!key || !mode) return;

      for (var o = 0; o < 5; o++) {
        var scale = Bandoneon.utils.scale(key, o, mode);
        scale.push(key + '' + (o + 1));
        this.renderScale(side, direction, scale, scaleColors[o]);
      }

      return this;
    },

    toggleOctaveColors: function() {
      this.showOctaveColors = !this.showOctaveColors;
      this.render();
      return false;
    }

  });

  var appModel = new AppModel();

  var AppRouter = Backbone.Router.extend({

    routes: {
      "scales/:key/:mode": "selectScale"
    },

    selectScale: function(key, mode) {
      appModel.set({ 'key': key, 'mode': mode });
    }

  });

  var appView = new AppView({ model: appModel, router: appRouter });
  var appRouter = new AppRouter();
  Backbone.history.start();

  window.appView = appView; // DEBUG

});
