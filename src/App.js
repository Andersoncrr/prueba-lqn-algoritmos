function App() {
  const pokemon = () => {
    const endsWith = (word) => word[word.length - 1];

    const getCandidates = (words, used) =>
      words.filter((e) => !used.includes(e));

    const buildLookup = (words) => {
      const lookup = new Map();
      words.forEach((e) => {
        const start = e[0];
        lookup.set(start, [...(lookup.get(start) || []), e]);
      });
      return lookup;
    };

    const findPaths = (names) => {
      console.log("Comprobando:", names.length, "nombres");
      const lookup = buildLookup(names);

      let maxNum = 0;
      let maxPaths = [];

      const parseResult = (arr) => {
        if (typeof arr[0] === "object") {
          arr.forEach((el) => parseResult(el));
        } else {
          if (arr.length > maxNum) {
            maxNum = arr.length;
            maxPaths = [arr];
          }
          if (arr.length === maxNum) {
            maxPaths.push(arr);
          }
        }
      };

      const searchWords = (word, res) => {
        const cs = getCandidates(lookup.get(endsWith(word)) || [], res);
        return cs.length ? cs.map((e) => searchWords(e, [...res, e])) : res;
      };

      names.forEach((word) => {
        const res = searchWords(word, [word]);
        parseResult(res);
      });
      console.log("Maximas soluciones:", maxNum);
      console.log("Caminos coincidentes:", maxPaths.length);
      console.log("Ejemplo soluciones:", maxPaths[0]);
    };

    const pokimon = [
      "audino",
      "bagon",
      "baltoy",
      "banette",
      "bidoof",
      "braviary",
      "bronzor",
      "carracosta",
      "charmeleon",
      "cresselia",
      "croagunk",
      "darmanitan",
      "deino",
      "emboar",
      "emolga",
      "exeggcute",
      "gabite",
      "girafarig",
      "gulpin",
      "haxorus",
      "heatmor",
      "heatran",
      "ivysaur",
      "jellicent",
      "jumpluff",
      "kangaskhan",
      "kricketune",
      "landorus",
      "ledyba",
      "loudred",
      "lumineon",
      "lunatone",
      "machamp",
      "magnezone",
      "mamoswine",
      "nosepass",
      "petilil",
      "pidgeotto",
      "pikachu",
      "pinsir",
      "poliwrath",
      "poochyena",
      "porygon2",
      "porygonz",
      "registeel",
      "relicanth",
      "remoraid",
      "rufflet",
      "sableye",
      "scolipede",
      "scrafty",
      "seaking",
      "sealeo",
      "silcoon",
      "simisear",
      "snivy",
      "snorlax",
      "spoink",
      "starly",
      "tirtouga",
      "trapinch",
      "treecko",
      "tyrogue",
      "vigoroth",
      "vulpix",
      "wailord",
      "wartortle",
      "whismur",
      "wingull",
      "yamask",
    ];

    findPaths(pokimon);
  };

  const numbers = () => {
    for (let i = 0; i <= 100; i++) {
      let result = "";
      if (i % 2 == 0) {
        result += "Buzz";
      }
      if (i % 5 == 0) {
        result += "Bazz";
      }
      console.log(i, result);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "10rem",
        textAlignLast: "center",
        background: "blue",
      }}
    >
      <hr />
      <div style={{ color: "white" }}>Prueba a</div>
      <br />
      <button
        style={{
          background: "green",
          width: "5rem",
          height: "3rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
        onClick={pokemon}
      >
        Oprimir
      </button>
      <div style={{ color: "white" }}>revisar la consola</div>
      <hr />
      <div style={{ color: "white" }}>Prueba b</div>
      <br />
      <button
        style={{
          background: "red",
          width: "5rem",
          height: "3rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
        onClick={numbers}
      >
        Oprimir
      </button>
      <div style={{ color: "white" }}>revisar la consola</div>
      <hr />
    </div>
  );
}

export default App;
