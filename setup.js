if (!blooketUtility.prefs.test) {
  blooketUtility.prefs.test = {
    title: "Gold Quest Cheat",
    description: "Gold Quest Cheat",
    value: {
      testBool: {
        title: "Test Boolean",
        description: "Test boolean for the Blooket Utility",
        value: true,
      },
      testGroup: {
        title: "Test Group",
        description: "Test group for the Blooket Utility",
        value: {
          testBool2: {
            title: "Test 2",
            description: "Yet another test",
            value: false,
          },
          testBool3: {
            title: "Test 3",
            description: "Yet another test",
            value: true,
          },
        },
      },
    },
  };
}
