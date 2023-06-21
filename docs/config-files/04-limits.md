---
id: limits
sidebar_label: "Limits"
---

# Limits

***

```yaml
# =========================================================#
#            Enchantment limiter configuration            #
# =========================================================#
#  Use -1 for no change                                   #
#  Use 0 to disable enchantment                           #
#  Use other values to limit enchantment level            #
# =========================================================#
ENCHANTMENT_LIMITER:
  ARROW_DAMAGE: 4
  ARROW_FIRE: 0
  ARROW_INFINITE: -1
  ARROW_KNOCKBACK: 1
  DAMAGE_ALL: 2
  DAMAGE_ARTHROPODS: -1
  DAMAGE_UNDEAD: -1
  DIG_SPEED: -1
  DURABILITY: -1
  FIRE_ASPECT: 0
  KNOCKBACK: 1
  LOOT_BONUS_BLOCKS: -1
  LOOT_BONUS_MOBS: -1
  LUCK: -1
  LURE: -1
  OXYGEN: -1
  PROTECTION_ENVIRONMENTAL: 2
  PROTECTION_EXPLOSIONS: -1
  PROTECTION_FALL: -1
  PROTECTION_FIRE: -1
  PROTECTION_PROJECTILE: -1
  SILK_TOUCH: -1
  THORNS: 0
  WATER_WORKER: -1

# =========================================================#
#               Potion limiter configuration              #
# =========================================================#
#  Use -1 for no change                                   #
#  Use 0 to disable potion                                #
#  Use other values to limit potion level                 #
#  Change extended to false to disable extended potions   #
# =========================================================#

POTION_LIMITER:
  SPEED:
    LEVEL: -1
    EXTENDED: true
  SLOW:
    LEVEL: 1
    EXTENDED: false
  FAST_DIGGING:
    LEVEL: -1
    EXTENDED: true
  SLOW_DIGGING:
    LEVEL: -1
    EXTENDED: true
  INCREASE_DAMAGE:
    LEVEL: 0
    EXTENDED: true
  HEAL:
    LEVEL: -1
    EXTENDED: true
  HARM:
    LEVEL: 0
    EXTENDED: true
  JUMP:
    LEVEL: -1
    EXTENDED: true
  CONFUSION:
    LEVEL: -1
    EXTENDED: true
  REGENERATION:
    LEVEL: 0
    EXTENDED: true
  DAMAGE_RESISTANCE:
    LEVEL: -1
    EXTENDED: true
  FIRE_RESISTANCE:
    LEVEL: -1
    EXTENDED: true
  WATER_BREATHING:
    LEVEL: -1
    EXTENDED: true
  INVISIBILITY:
    LEVEL: -1
    EXTENDED: true
  BLINDNESS:
    LEVEL: -1
    EXTENDED: true
  NIGHT_VISION:
    LEVEL: -1
    EXTENDED: true
  HUNGER:
    LEVEL: 0
    EXTENDED: true
  WEAKNESS:
    LEVEL: 0
    EXTENDED: true
  POISON:
    LEVEL: 1
    EXTENDED: false
  WITHER:
    LEVEL: -1
    EXTENDED: true
  HEALTH_BOOST:
    LEVEL: -1
    EXTENDED: true
  ABSORPTION:
    LEVEL: -1
    EXTENDED: true
  SATURATION:
    LEVEL: -1
    EXTENDED: true

# =========================================================#
#               Entity limiter configuration              #
# =========================================================#
#  Use true to enable entity spawning                     #
#  Use false to disable entity spawning                   #
# =========================================================#

ENTITY_LIMITER:
  OVERWORLD:
    BAT: false
    BLAZE: false
    CAVE_SPIDER: false
    CHICKEN: false
    COW: false
    CREEPER: false
    ENDER_DRAGON: false
    ENDERMAN: false
    GHAST: false
    GIANT: false
    HORSE: false
    IRON_GOLEM: false
    MAGMA_CUBE: false
    MUSHROOM_COW: false
    PIG: false
    PIG_ZOMBIE: false
    SHEEP: false
    SKELETON: false
    SLIME: false
    SNOWMAN: false
    SPIDER: false
    SQUID: false
    VILLAGER: false
    WITCH: false
    WITHER: false
    WOLF: false
    ZOMBIE: false
  NETHER:
    BAT: true
    BLAZE: true
    CAVE_SPIDER: true
    CHICKEN: true
    COW: true
    CREEPER: true
    ENDER_DRAGON: true
    ENDERMAN: true
    GHAST: true
    GIANT: true
    HORSE: true
    IRON_GOLEM: true
    MAGMA_CUBE: true
    MUSHROOM_COW: true
    PIG: true
    PIG_ZOMBIE: true
    SHEEP: true
    SKELETON: true
    SLIME: true
    SNOWMAN: true
    SPIDER: true
    SQUID: true
    VILLAGER: true
    WITCH: true
    WITHER: true
    WOLF: true
    ZOMBIE: true
  THE_END:
    BAT: true
    BLAZE: true
    CAVE_SPIDER: true
    CHICKEN: true
    COW: true
    CREEPER: true
    ENDER_DRAGON: true
    ENDERMAN: true
    GHAST: true
    GIANT: true
    HORSE: true
    IRON_GOLEM: true
    MAGMA_CUBE: true
    MUSHROOM_COW: true
    PIG: true
    PIG_ZOMBIE: true
    SHEEP: true
    SKELETON: true
    SLIME: true
    SNOWMAN: true
    SPIDER: true
    SQUID: true
    VILLAGER: true
    WITCH: true
    WITHER: true
    WOLF: true
    ZOMBIE: true

BLACKLISTED_BLOCKS:
  - "LEVER"
  - "STONE_BUTTON"
  - "WOODEN_DOOR"
  - "WOOD_BUTTON"
  - "WOOD_DOOR"
  - "TRAP_DOOR"
  - "FENCE_GATE"
  - "BIRCH_FENCE_GATE"
  - "BIRCH_DOOR"
  - "SPRUCE_DOOR"
  - "SPRUCE_FENCE_GATE"
  - "JUNGLE_DOOR"
  - "JUNGLE_FENCE_GATE"
  - "ACACIA_DOOR"
  - "ACACIA_FENCE_GATE"
  - "DARK_OAK_DOOR"
  - "DARK_OAK_FENCE_GATE"
  - "CHEST"
  - "TRAPPED_CHEST"
  - "ENDER_CHEST"
  - "HOPPER"
  - "BREWING_STAND"
  - "FURNACE"
  - "BURNING_FURNACE"

ALLY:
  - "CHEST"
  - "TRAPPED_CHEST"
  - "FURNACE"
  - "BURNING_FURNACE"
```