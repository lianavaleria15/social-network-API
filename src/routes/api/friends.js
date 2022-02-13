const { Router } = require("express");
const { addFriend, deleteFriend } = require("../../controllers/friends");

const router = Router({ mergeParams: true });

router.post("/", addFriend);

router.delete("/:reactionId", deleteFriend);

module.exports = router;
