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
        // Channel one
        {
            ugen: "flock.ugen.out",
            bus: 0,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: {
                        ugen: "flock.ugen.sequencer",
                        durations: [360.0, 180.0],
                        values: [220 * 8/9, (220 * 3/2 * 8/9)],
                        loop: 1.0
                    },
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        width: 0.5,
                        phase: 0.0,
                        freq: 1/15,
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
                    freq: {
                        ugen: "flock.ugen.sequencer",
                        durations: [360.0, 180.0],
                        values: [110, 110 * 3/2],
                        loop: 1.0
                    },
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        phase: 0.25,
                        width: 0.1,
                        freq: 1/45,
                        mul: 0.35,
                        add: 0.35
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
                    freq: {
                        ugen: "flock.ugen.sequencer",
                        durations: [300.0, 150.0],
                        values: [55 * 3/2, 55 * 3/2 * 3/2],
                        loop: 1.0
                    },
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
                    freq: {
                        ugen: "flock.ugen.sequencer",
                        durations: [300.0, 150.0],
                        values: [73.33333333, 73.33333333 * 3/2],
                        loop: 1.0
                    },
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        phase: 1/3,
                        width: 0.5,
                        freq: 1/12,
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
                    freq: {
                        ugen: "flock.ugen.sequencer",
                        durations: [300.0, 150.0],
                        values: [68.75, 68.75 * 3/2],
                        loop: 1.0
                    },
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
        // 53.5
        {
            ugen: "flock.ugen.out",
            bus: 5,
            expand: 1,
            sources: [
                {
                    ugen: "flock.ugen.sinOsc",
                    freq: {
                        ugen: "flock.ugen.sequencer",
                        durations: [360.0, 180.0],
                        values: [54.14285714, 54.14285714 * 3/2],
                        loop: 1.0
                    },
                    mul: {
                        ugen: "flock.ugen.sinOsc",
                        phase: 1/3,
                        width: 0.1,
                        freq: 1/45,
                        mul: 0.3,
                        add: 0.3
                    }
                }
            ]
        }
    ]
});
