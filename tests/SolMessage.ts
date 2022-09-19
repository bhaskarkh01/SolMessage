import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolMessage } from "../target/types/sol_message";

describe("SolMessage", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolMessage as Program<SolMessage>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
