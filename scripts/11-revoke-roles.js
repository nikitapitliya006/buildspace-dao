import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xC93b0B144517244649B11Cb8fC3518979D102C2f",
);

(async () => {
  try {
    // Log the current roles.
    console.log(
      "👀 Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    //await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    //console.log("🎉 Roles after revoking ourselves", await tokenModule.getAllRoleMembers());
    //console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
    
    console.log("Did not revoke my superpowers yet from the ERC-20 contract. Uncomment and run above 3 lines.")

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();