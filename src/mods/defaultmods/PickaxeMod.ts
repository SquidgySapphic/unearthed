import { Layer } from "src/Map";
import { GameContext, MobContext, ServerMod } from "../Mods";

export class PickaxeMod implements ServerMod {
    id: string = "default-pickaxe";
    name: string = "PickAxe-Default";
    chatName: string = "pickaxe";
    version: number = 1;
    apiVersion: number = 1;

    onGameStart(game: GameContext): void {
        game.addTool("holding/pick_iron", 0, "iron-pick", false, true, 60);
    }

    onUseTool(game: GameContext, mob: MobContext | undefined, x: number, y: number, layer: Layer, toolId: string): void {
        console.log("Invoked with: "+ toolId);
        if (toolId === "iron-pick") {
            game.setBlock(x, y, layer, 0);
            game.playSfx('mining_break', 0.6, 5);
        }
    }

    onProgressTool(game: GameContext, mob: MobContext | undefined, x: number, y: number, layer: Layer, toolId: string): void {
        if (toolId === "iron-pick") {
            game.playSfx('mining', 0.5, 5);
        }
    }
}