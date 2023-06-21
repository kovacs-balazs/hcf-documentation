---
id: classes
sidebar_label: "Classes"
---

# Classes

***

```yaml
# +----------------------------------------------------+ #
# <                    HCF+ Config                     > #
# <                     Created by                     > #
# <                    Idbi & Koba                     > #
# +----------------------------------------------------+ #

Archer:
# Enables the class
  ArcherEnabled: true
# Enables the archertag.
  ArcherTagEnabled: true
# Sets the damage amplifier.(% value)
  ArcherTagDamageAmplifier: 100.0
# Max archer class users per faction. Set to -1 to disable the limit.
  MaxArcherInFaction: -1
Bard:
# Enables the class
  BardEnabled: true
# Enables the right-click boost.(Amplifies the held effect)
  BoostEnabled: true
# Enabled the hotbar effect boost. (Simple area boost effect.)
  SimpleBoostEnabled: true
# Sets the maximum amount bard energy. Please do not use minus value :)
  MaxBardEnergy: 100
# The amount of bard energy given per second.
  BardEnergyMultiplier: 1.0
# Max bard class users per faction. Set to -1 to disable the limit.
  MaxBardInFaction: -1
# Use the new bard system: You can use your hotbar to hold all the effects.
# Setting this value to false will disable this feature and it will going to use the old bard system: (Giving the effect in your ha)
  UseNewBardSystem: true
# This value will enable a circle around the bard,   if he''s holding effects!
  UseEffects: true
Miner:
# Enables the class
  MinerEnabled: true
# Enables the invisible effect after reaching a certain y limit.
  MinerInvisibleEnabled: true
# Sets the Y limit, reaching this value will sets the miner invisible
  MinerInvisibleYLevel: 45
# Max miner class users per faction. Set to -1 to disable the limit.
  MaxMinerInFaction: -1
Rogue:
# Enables the class
  RogueEnabled: true
# Enables the backstab.
  BackstabEnabled: true
# Sets the damage amplifier.(% value)
  BackstabDamageAmplifier: 100.0
# Max rogue class users per faction. Set to -1 to disable the limit.
  MaxRogueInFaction: -1
```