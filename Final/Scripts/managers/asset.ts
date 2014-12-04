module managers {

    export class asset {

        static loader;
        static atlas: createjs.SpriteSheet;

        static spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [

                [1000, 203, 9, 9],
                [324, 343, 96, 96],
                [541, 164, 96, 96],
                [746, 2, 96, 96],
                [422, 343, 96, 96],
                [844, 2, 96, 96],
                [541, 262, 96, 96],
                [646, 104, 96, 96],
                [639, 202, 96, 96],
                [520, 360, 96, 96],
                [639, 300, 96, 96],
                [618, 398, 96, 96],
                [716, 398, 96, 96],
                [737, 202, 96, 96],
                [737, 300, 96, 96],
                [814, 398, 96, 96],
                [744, 104, 96, 96],
                [842, 100, 96, 96],
                [835, 202, 96, 96],
                [835, 300, 96, 96],
                [912, 398, 96, 96],
                [2, 2, 320, 160],
                [2, 164, 320, 160],
                [942, 2, 65, 65],
                [942, 69, 65, 65],
                [940, 136, 65, 65],
                [933, 203, 65, 65],
                [324, 2, 320, 160],
                [933, 270, 62, 63],
                [2, 326, 320, 160],
                [324, 164, 215, 177],
                [646, 2, 98, 100]
            ],
            "animations": {

                "play": [21],
                "playagain": [22],
                "back": [27],
                "instruction": [29],
                "fire": [26],
                "bird": {
                    frames: [23, 24, 25],
                    speed: 0.2
                },
                "egg": [28],
                "pig": [31],
                "pig2": [30],
                "bullit": [0],
                "bigexplosion": {
                    frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                    next: false,
                    speed: 0.5
                } 

            }

        }

        static manifest = [
            { id: "sky", src: "assets/images/sky.jpg" },
            { id: "coin", src: "assets/sounds/coin.mp3" },
            { id: "anger", src: "assets/sounds/Stupid Girl.mp3" },
            { id: "pig", src: "assets/sounds/Pig.mp3" }
        ];

        static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);

        }

    }
}  