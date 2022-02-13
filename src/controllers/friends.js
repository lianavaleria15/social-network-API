const { User } = require("../models");

const addFriend = async (req, res) => {
  try {
    //get current user id
    const { userId } = req.params;

    //push new friend inside friends array
    const data = await User.findByIdAndUpdate(
      userId,
      {
        $push: { friends: { ...req.body } },
      },
      { new: true }
    ).populate("friends");

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to add new friend | ${error.message}`);

    return res.status(500).json({
      success: false,
      error: "Failed to add new friend",
    });
  }
};

const deleteFriend = async (req, res) => {
  try {
    const { userId, friendId } = req.params;

    console.log(userId, friendId);

    const data = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { friends: { $in: [friendId] } },
      },
      { new: true }
    );

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete friend | ${error.message}`);

    return res.status(500).json({
      success: false,
      error: "Failed to delete friend",
    });
  }
};

module.exports = { addFriend, deleteFriend };
