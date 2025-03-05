fluid.defaults("kl.rampHaptics", {
    gradeNames: "fluid.component",
    components: {
        synth: {
            type: "kl.rampHaptics.synth"
        },

        playButton: {
            type: "flock.ui.enviroPlayButton",
            container: "#play"
        }
    }
});

fluid.defaults("kl.rampHaptics.synth", {
    gradeNames: "flock.synth",
    synthDef: [
        // 53.5
        // Channel one
        {
            ugen: "flock.ugen.out",
            bus: 0,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: 220 * 8/9,
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        width: 0.5,
                        phase: 0.0,
                        freq: 1/7.5,
                        mul: 0.4,
                        add: 0.4
                    }
                }
            ]
        },

        // Channel two
        {
            ugen: "flock.ugen.out",
            bus: 1,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: 110,
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        phase: 0.25,
                        width: 0.1,
                        freq: 1/15,
                        mul: 0.4,
                        add: 0.4
                    }
                }
            ]
        },

        // Channel three
        {
            ugen: "flock.ugen.out",
            bus: 2,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: 55 * 3/2,
                    mul: {
                        ugen: "flock.ugen.triOsc",
                        phase: 2/3,
                        width: 0.01,
                        freq: 1/30,
                        mul: 0.1,
                        add: 0.1
                    }
                }
            ]
        },

        // Channel four
        {
            ugen: "flock.ugen.out",
            bus: 3,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: 73.33333333,
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        phase: 0.3,
                        width: 0.5,
                        freq: 1/6,
                        mul: 0.3,
                        add: 0.3
                    }
                }
            ]
        },

        // Channel five
        {
            ugen: "flock.ugen.out",
            bus: 4,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: 68.75,
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        phase: 0.4,
                        width: 0.25,
                        freq: 1/15,
                        mul: 0.3,
                        add: 0.3
                    }
                }
            ]
        },

        // Channel six
        {
            ugen: "flock.ugen.out",
            bus: 5,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: 54.14285714,
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        phase: 1/3,
                        width: 0.1,
                        freq: 1/30,
                        mul: 0.3,
                        add: 0.3
                    }
                }
            ]
        }
    ]
});
