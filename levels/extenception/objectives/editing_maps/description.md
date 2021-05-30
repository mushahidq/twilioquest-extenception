# Editing Maps

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Install Tiled.</li>
  <li>Make changes to the map as you like.</li>
</ul>
</div>

The maps in TwilioQuest levels are stored in `json` but can be edited using Tiled. When opening the map in Tiled the program automatically detects the used Tileset and displays it.

Using Tiled you can the map to your liking and save it. To refresh the map in TwilioQuest, return to the Fog Owl and go back to the VR Training Computer and select your mission(level). This level is an example of how different Tiles from TwilioQuest can be combined to create unique levels.

## Installing Tiled

Tiled can be downloaded from https://www.mapeditor.org/

## Layers and Tiles

Tiles are the core of how you'll build the static parts of a TwilioQuest map. In Tiled, these are placed within "tile layers" using a variety of tools. These layers function similarly to layers in painting programs like Adobe Photoshop.

Layers can have a few special properties that TwilioQuest will consume to treat them differently. These properties are:

* `collision` - If this is set to true, then the tiles in this layer will prevent the player from passing through them. There is usually a main `Collision` tile layer with this property.
* `hidden` - When set to true, this tile layer will not be rendered visually to the player. The `Collision` layer should have this property set as well.
* `useCollisionMasks` - This is a more advanced feature that will let the tiles in a tile layer use the Tiled Collision Editor to specify a custom collision box. This can be useful if tiles do not visually sit on the tile grid.

## Objects and Properties

Objects are important for accomplishing the various dynamic parts of TwilioQuest. This includes things like non player characters, laser barriers, and more!
Objects live within a special type of layer called an "object layer". Generally, each TwilioQuest map has a single object layer where every object lives. This layer is conventionally called Objects.
Both built-in objects and custom objects can be added to this layer. They will have properties that can be tweaked for different effects depending on the object.
These are a few important built-in objects that essentially every map will use:

* Player Entry Point - controls player spawn point
* Terminal - launches an objective for the player to complete
* Laser Barrier - blocks a player's progression until a specific objective is completed
* Chests - Used to reward the player for completing an objective.
* Exit - transports a player between maps, you'll at least need one to take your player back to the Fog Owl after they play your mission.
