const { Router } = require("express");
const { addFriend, deleteFriend } = require("../../controllers/friends");

const router = Router({ mergeParams: true });

router.put("/", addFriend);

router.delete("/:friendId", deleteFriend);

module.exports = router;
