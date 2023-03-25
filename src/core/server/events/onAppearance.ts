import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

/**
 * Synchronizes all changes when data.appearance is set on a character.
 *
 * @param {alt.Player} player
 * @return {*}
 */
function handleUpdate(player: alt.Player) {
    const data = Athena.document.character.get(player);
    if (!data) {
        return;
    }

    Athena.player.sync.appearance(player);
    Athena.systems.inventory.clothing.update(player);
}

Athena.document.character.onChange('appearance', handleUpdate);
Athena.document.character.onChange('skin', handleUpdate);
Athena.document.character.onChange('uniform', handleUpdate);