AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        captain_america: {
          banner_url: "./assets/posters/captain-america.jpg",
          title: "Captain America",
          released_year: "March 1941",
          description:
            "Captain America is a superhero appearing in American comic books published by Marvel Comics.Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.",
        },
        harry_potter: {
          banner_url: "./assets/posters/harry-potter.jpg",
          title: "Harry Potter",
          released_year: "June 1997",
          description:
            "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
        },
        "percy_jackson": {
          banner_url: "./assets/posters/percy-jackson.jpg",
          title: "Percy Jackson",
          released_year: "2005",
          description:
            "Perseus (Percy) Jackson is a fictional character, the title character and narrator of Rick Riordan's Percy Jackson & the Olympians series. He is also one of seven main protagonists of the sequel series The Heroes of Olympus, appearing in every book except The Lost Hero, and appears in the Trials of Apollo series, making him one of the few characters to appear in all three series of the Camp Half-Blood chronicles. The character serves as the narrator in Percy Jackson's Greek Gods and Percy Jackson's Greek Heroes, also by Rick Riordan.",
        },
        "spiderman": {
          banner_url: "./assets/posters/spiderman.jpg",
          title: "SpiderMan",
          released_year: "August 1962",
          description:
            "Spider-Man is a superhero appearing in American comic books published by Marvel Comics.In his origin story, Spider-Man gets superhuman spider-related powers and abilities from a bite from a radioactive spider; these include clinging to surfaces, superhuman strength, speed, and agility, and detecting danger with his (spider-sense.) He also builds wrist-mounted (web-shooter) devices that shoot artificial spider webs of his own design.",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 1.2,
        height: 1.5,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: -0.01, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.5,
        height: 0.5,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.4, z: 0.02 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.28, z: 0.05 });
      return entityEl;
    },
  });