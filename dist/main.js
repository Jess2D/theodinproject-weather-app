(() => {
  var e = {
      955: (e) => {
        function n(e) {
          const n = e.sunset;
          document.getElementById("sunset").innerHTML = "Sunset: " + t(n);
        }
        function t(e) {
          return new Date(1e3 * e).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          });
        }
        e.exports = {
          Sunrise: function (e) {
            const n = e.sunrise;
            document.getElementById("sunrise").innerHTML = "Sunrise: " + t(n);
          },
          Sunset: n,
          Sunset: n,
          Country: function (e) {
            const n = e.country;
            document.getElementById("country").innerHTML = " ," + n;
          },
        };
      },
      428: (e) => {
        e.exports = {
          Temperature: function (e) {
            const n = e.temp;
            document.getElementById("temperature").innerHTML =
              Math.round(n) + "°C";
          },
          TemperatureMax: function (e) {
            const n = e.temp_max;
            document.getElementById("temperatureMax").innerHTML =
              "|  Max: " + Math.round(n) + "°C";
          },
          TemperatureMin: function (e) {
            const n = e.temp_min;
            document.getElementById("temperatureMin").innerHTML =
              "Min: " + Math.round(n) + "°C";
          },
          FellsLike: function (e) {
            const n = e.feels_like;
            document.getElementById("fellsLike").innerHTML =
              "Fells like: " + Math.round(n) + "°C";
          },
          Pressure: function (e) {
            const n = e.pressure;
            document.getElementById("pressure").innerHTML =
              "Pressure: " + Math.round(n) + " hPa";
          },
          Humidity: function (e) {
            const n = e.humidity;
            document.getElementById("humidity").innerHTML =
              "Humidity: " + Math.round(n) + " %";
          },
        };
      },
      891: (e) => {
        e.exports = {
          WeatherIcon: function (e) {
            const n = e[0].icon;
            document.getElementById(
              "weatherIcon"
            ).innerHTML = `<img src="http://openweathermap.org/img/w/${n}.png"/>`;
          },
          Weather: function (e) {
            const n = e[0].description;
            document.getElementById("weather").innerHTML = n;
          },
        };
      },
      349: (e) => {
        e.exports = {
          WindSpeed: function (e) {
            const n = e.speed,
              t = document.getElementById("windSpeed");
            console.log(n),
              (t.innerHTML = "Wind: " + (3.6 * n).toFixed(2) + "km/h");
          },
          WindSDeg: function (e) {
            const n = e.deg;
            var t;
            document.getElementById("windDeg").innerHTML =
              "  " +
              ((t = n),
              [
                "N",
                "NNE",
                "NE",
                "ENE",
                "E",
                "ESE",
                "SE",
                "SSE",
                "S",
                "SSW",
                "SW",
                "WSW",
                "W",
                "WNW",
                "NW",
                "NNW",
              ][Math.floor(t / 22.5 + 0.5) % 16]);
          },
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      "use strict";
      var e = t(428),
        n = t(891),
        r = t(349),
        o = t(955);
      let i,
        u,
        d,
        s,
        c,
        m = document.getElementById("form");
      m.addEventListener("submit", function (t) {
        t.preventDefault();
        let a = m.elements.search.value;
        fetch(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            a +
            "&appid=27498aefb60e29be93db8f28bc8e7bbd&units=metric"
        )
          .then((e) => e.json())
          .then((t) => {
            console.log(t),
              (i = t.name),
              (u = { ...t.main }),
              (d = { ...t.weather }),
              (s = { ...t.wind }),
              (c = { ...t.sys }),
              console.log(t.main.temp),
              (function (e) {
                const n = e;
                document.getElementById("name").innerHTML = n;
              })(i),
              (0, e.Temperature)(u),
              (0, e.TemperatureMax)(u),
              (0, e.TemperatureMin)(u),
              (0, e.FellsLike)(u),
              (0, e.Pressure)(u),
              (0, e.Humidity)(u),
              (0, n.Weather)(d),
              (0, n.WeatherIcon)(d),
              (0, r.WindSpeed)(s),
              (0, r.WindSDeg)(s),
              (0, o.Sunrise)(c),
              (0, o.Sunset)(c),
              (0, o.Country)(c);
          });
      });
    })();
})();
