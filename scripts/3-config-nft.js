import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x918fEe7BC2a0a813a5987777F7f33d8D88F65197",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Butter Lettuce",
        description: "This NFT will give you access to GreensDAO!",
        image: readFileSync("scripts/assets/butterlettuce.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()