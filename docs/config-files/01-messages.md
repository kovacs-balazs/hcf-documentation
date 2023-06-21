---
id: messages
sidebar_label: "Messages"
---

# Messages

***

```yaml
prefix: '&8[&2HCF&a+&8] &7>'
prefix_cmd: '&r[&2HCF&a+&r] &r'
Server:
  reload: '%prefix% &aSuccessfully reloaded configuration files!'
  invalid_type: Invalid Type! Check the command description for more details
  cant_start_eotw: '%prefix% &ceotw start failed! (No spawn location defined! Please use &n/a spawnclaim&f&c)'
  no_permission: '%prefix% &cYou don''t have permission!'
  not_enough_slot: '%prefix% &cYou don''t have enough space!'
  not_found_player: '%prefix% &cCan''t find this player!'
  not_found_faction: '%prefix% &cCan''t find this faction!'
  command_cooldown: '%prefix% &cYou must wait &e%time%s &cbetween uses!'
  not_a_number: '%prefix% &cPlease use a valid number'
  not_a_valid_name: '%prefix% &cPlease use a valid name'
  server_slot_amount: '%prefix% &aThe server has currently &2&o%number% &aslots!'
  server_slot_set: '%prefix% &aYou have successfully set the slots to: &2&o%number%&a!'
  chat_unavailable: '%prefix% &cThis chat-channel is not available!'
  dont_have_item: '%prefix% &cYou don''t have enough items in your inventory!'
  custom_item_give_executor: '&aYou gave &2&o%item%&a to &2&o%player%&a.'
  custom_item_give_player: '&aYou got &2&o%item%&a.'
  cant_find_page: '&cThis page does not exists!'
  not_deathbanned: '%prefix% &cThis player is not deathbanned!'
  deathban_kick: '&cYou are deathbanned for %format_time%'
  error_while_executing: '%prefix% &4&lAn error occurred while running the command! Please check the LOG file, and report it!'
  server_is_full: '&cThe server is full!'
  warzone_no_permission: '%prefix% &eYou can''t do this in the Warzone!'
  missing_argument: '%prefix% &cThis command requires &none or more&f&c argument!'
Factions:
  chat_prefix_faction: '&8[&6%faction_name%&8] &e%player% &f> &7%message%'
  chat_prefix_without_faction: '&e%player% &f> &7%message%'
  no_permission_in_faction: '%prefix% &cYou need a higher rank to use this command!'
  you_cant_do: '%prefix% &eYou can''t do this at &c&o%faction_name%''s &eplace!'
  cant_demote: '%prefix% &cYou can''t demote &c&o%player%'
  exists_faction_name: '%prefix% &cThis faction name already exists!'
  you_already_in_faction: '%prefix% &cYou are already in faction!'
  not_in_faction: '%prefix% &cYou are not in a faction!'
  player_in_faction: '%prefix% &cThis player is already in a faction!'
  player_cant_self_promote: '%prefix% &c&nNice try&r&c, but you cant promote yourself :('
  player_cant_self_demote: '%prefix% &c&nNice try&r&c, but you cant demote yourself :('
  uninvite_target: '%prefix% &2&o%player%&c canceled your invitation!'
  uninvite_executor: '%prefix% &cYou canceled to invite &2&o%player%&c!'
  already_invited: '%prefix% &cThis player is already invited!'
  not_invited: '%prefix% &cYou are not invited to this faction!'
  no_faction_exists: '%prefix% &cThis faction does not exists!'
  faction_team_focused: '%prefix% &2&o%faction_name% &ahas been focused by &2&o%player%&a!'
  faction_team_unfocused: '%prefix% &eYour team focus has been cleared!'
  faction_own_team_focus: '%prefix% &cYou can''t focus your faction!'
  faction_rally: '%prefix% &2&o%player% &ahas set a rally point at &2&o%location% &a(&2&o%world%&a)'
  faction_unrally: '%prefix% &eYour factions rally point has been removed!'
  faction_rally_waypoint_name: Rally
  faction_home_waypoint_name: Home
  faction_creation: '%prefix% &2&o%faction_name% &awas created by &2&o%player%&a!'
  faction_create_success: '%prefix% &aYou have successfully created the &2&o%faction_name%&a faction!'
  faction_disband: '%prefix% &2&o%faction_name% &awas disbanded by &2&o%player%&a!'
  faction_delete_success: '%prefix% &aYou have successfully deleted the &2&o%faction_name%&a faction!'
  invited_by: '%prefix% &6&o%executor% &einvited you to join &6&o%faction_name%&e!'
  invited_player: '%prefix% &eYou invited &6&o%player% &eto the faction!'
  faction_invite_broadcast: '%prefix% &6&o%executor% &einvited &6&o%player% &eto the faction!'
  new_member_join_faction: '%prefix% &6&o%player% &ejoined the faction!'
  member_leave_faction: '%prefix% &6&o%player% &eleft the faction!'
  player_joined_faction_message: '%prefix% &eYou joined the faction!'
  player_leaving_faction_message: '%prefix% &aYou left the faction!'
  faction_bank_deposit: '%prefix% &aSuccessfully deposited &2&o$%amount% &ain your faction''s bank!'
  faction_bank_withdraw: '%prefix% &aSuccessfully withdrew &2&o$%amount% &afrom your faction''s bank!'
  faction_bank_not_enough: '%prefix% &cYour faction doesn''t have enough money!'
  faction_bank_number_error: '%prefix% &cPlease enter a valid number!'
  not_enough_money: '%prefix% &cYou don''t have enough money!'
  faction_transfer_leader: '%prefix% &aYou have successfully transferred the leadership to &6&o%player%&a!'
  faction_transfer_leader_target: '%prefix% &6&o%player%&a transferred the leadership to you!'
  kick_message: '&%prefix% &a%executor% &ekicked &a%player%&e from the faction!'
  kick_message_target: '&%prefix% &cYou have been kicked from the faction!'
  leader_leaving_faction: '%prefix% &cYou can''t leave this faction, because you are the leader! Use &e&l/f disband %faction% &r&cinstead!'
  cant_leave_while_on_claim: '%prefix% &cYou can''t leave this faction, while you are inside the faction''s claim!'
  not_leader: '%prefix% &cYou are not the faction''s leader!'
  cant_kick_yourself: '%prefix% &cYou can''t kick yourself!'
  cant_kick_leader: '%prefix% &cYou can''t the faction leader!'
  join_online_player_in_faction: '&8[&a+&8] &7&l» &6&o%player%'
  leave_online_player_in_faction: '&8[&c-&8] &7&l» &6&o%player%'
  faction_player_position: '%prefix% &7-> &6&o%player%''s &eposition: &6&o%location_x%&e,   &6&o%location_y%&e, &6&o%location_z%'
  looking_for_faction: '&2&o%player% &alooking for faction!'
  sethome_message: '%prefix% &aSuccessfully set home of your faction to your location!'
  sethome_update_faction: '%prefix% &7&l%player% &f&echanged the faction''s home location! &7[&6&o%location_x%&e, &6&o%location_y%&e, &6&o%location_z%&7]'
  teleport_to_home: '%prefix% &eTeleportation in &6&o%time% seconds&e. &cDo not move!'
  already_home_teleporting: '%prefix% &cTeleportation canceled!'
  successfully_home_teleport: '%prefix% &eSuccessfully teleported to your faction''s home!'
  teleport_cancel: '%prefix% &cYou moved, teleportation cancelled!'
  no_home: '%prefix% &cYour faction doesn''t have a home set!'
  promote_message: '%prefix% &6&o%executor% &epromoted you to &6&o%rank%&e!'
  demote_message: '%prefix% &6&o%executor% &edemoted you to &6&o%rank%&e!'
  executor_promote_message: '%prefix% &eYou promoted &6&o%player% &eto &6&o%rank%&e!'
  executor_demote_message: '%prefix% &eYou demoted &6&o%player% &eto &6&o%rank%&e!'
  executor_promote_broadcast_message: '%prefix% &6&o%executor% &epromoted &6&o%player% to &6&o%rank%&e!'
  executor_demote_broadcast_message: '%prefix% &6&o%executor% &edemoted &6&o%player% to &6&o%rank%&e!'
  max_members_reached: '%prefix% &4&lYou can''t invite more people to the faction because it''s full!'
  kill_message_faction: '&4&l%killer%&f killed &4&l%victim%&f. &7[&eNew DTR: &a&l%dtr%&7]'
Ally:
  already_invited_ally: '%prefix% &cThis faction is already invited to your ally.'
  not_invited_ally: '%prefix% &cThis faction didn''t invited you to their ally.'
  faction_invited_ally: '%prefix% &2&o%faction_name% &awas invited to join this faction ally.'
  faction_not_ally: '%prefix% &2&o%faction_name% &c is not your ally!'
  joined_ally: '%prefix% &2&o%faction_name% &anow is your ally!'
  faction_decline_ally_target: '%prefix% &2&o%faction_name% &chad declined the alliance!'
  faction_decline_ally_success: '%prefix% &aYou have successfully declined &2&o%faction_name%&a alliance!'
  faction_uninvite_ally_target: '%prefix% &2&o%faction_name% &chas withdrawn the ally invitation!'
  faction_uninvite_ally_success: '%prefix% &aYou successfully uninvited &2&o%faction_name%&a from your allies!'
  faction_ally_resolve_target: '%prefix% &2&o%faction_name%&a had dissolved the alliance!'
  faction_ally_resolve_success: '%prefix% &aYou have successfully dissolved the alliance with &2&o%faction_name%&a!'
Claims:
  faction_claim_price: '%prefix% &aPrice: &2&o$%price% &afor &2&o%blocks%'
  faction_claim_decline: '%prefix% &cYou successfully cancelled the claim!'
  faction_claim_accept: '%prefix% &aYou successfully claimed!'
  faction_claim_invalid_zone: '%prefix% &cInvalid claiming zone!'
  faction_claim_overlap: '%prefix% &cYour claim can''t overlap an existing claim!'
  faction_claim_too_small: '%prefix% &cYour claim is too small! (Min size: %number%x%number%)'
  faction_claim_too_large: '%prefix% &cYour claim is too large! (Max size: %number%x%number%)'
  faction_reached_max_claims: '%prefix% &cYour faction reached the max amount of claims.'
  faction_claim_overlap_plus_one: '%prefix% &cYour claim can''t overlap an existing claim! Leave a block between the two claims'
  faction_claim_not_connected: '%prefix% &cYour claim is not connected to the main claim.'
  faction_not_have_claim: '%prefix% &cYour faction does not have any claims.'
  success_unclaim: '%prefix% &aYou successfully unclaimed!'
  leave_zone: '&eYou left %zone%'
  entered_zone: '&eYou entered %zone%'
  wilderness: '&2Wilderness'
  warzone: '&4Warzone'
  faction_dont_have_claim: '%prefix% &4Your faction does not have a claim yet!'
  claim_pos_start: '%prefix% &bClaim start position: &a&n%location%'
  claim_pos_end: '%prefix% &bClaim end position: &a&n%location%'
Reclaim:
  reclaim_claimed: '%prefix% &aYou successfully reclaimed!'
  reclaim_already_claimed: '%prefix% &aYou already reclaimed!'
  reclaim_reset_all: '%prefix% &aYou successfully reclaim for all player!'
  reclaim_reset_player: '%prefix% &aYou successfully reclaim for &2&o%player%!'
Chat:
  staff_chat: '&8[&eStaffChat&8] &b%player%&7: &e%message%'
  faction_chat: '&7[&e%faction_name%&7] [&e%rank%&7] &6&o%player%&7: &e%message%'
  ally_chat: '&7[&dAllience&7] &7[&d%faction_name%&7] &5&o%player%&7: &d%message%'
  leader_chat: '&7[&aLeader&7] &2&o%player%&7: &a%message%'
  toggle_chat_enable: '%prefix% &aYou enabled the &2&o%chat% &achat.'
  toggle_chat_disable: '%prefix% &cYou disabled the &2&o%chat% &cchat.'
  cant_send_message_to_channel: '%prefix% &cYou can''t send message, because you muted this channel!'
  chat_channel_changed: '%prefix% &aYou are now in &2&o%chat% &achat.'
  public_chat_channel: Public
  staff_chat_channel: Staff
  faction_chat_channel: Faction
  ally_chat_channel: Ally
  leader_chat_channel: Leader
  hover_join: '&7Click here to join!'
  hover_accept: '&7Click here to accept!'
Design:
  status_design_online: '&aOnline'
  status_design_offline: '&cOffline'
  category_design: '&7&l» &6%category%:'
  member_list_design_online: '&a%member% &f[&7%member_kill%&f]'
  member_list_design_offline: '&7%member% &f[&7%member_kill%&f]'
  faction_list_title: '&7&m---&r &6Faction List by %type% &7&m---'
  faction_list: '&7%number%. &e%faction_name% &6-- &7[&a%online%&7] [%dtr%&7]'
  faction_custom_list_title: '&7&m---&r &6Custom Faction List &7&m---'
  faction_custom_list: '&7%number%. &e%faction_name% &6 - &7[&a%type%&7]'
  faction_top_title: '&7&m---&r &6Faction Top by %type% &7&m---'
  faction_top: '&7%number%. &e%faction_name% &6-- &e%value%'
  faction_top_list_gui_prefix: '&7#%number% '
Page:
  faction_chat_page: '&2Page %page%'
  faction_chat_page_previous: '&a<<< '
  faction_chat_page_next: ' &a>>>'
Shop:
  sign_shop_bought: '%prefix% &aYou bought &2&o%amount%x %item% &afor &2&o$%price%&a.'
  sign_shop_sold: '%prefix% &aYou sold &2&o%amount%x %item% &afor &2&o$%price%&a.'
Admin:
  admin_duty_on: '%prefix% &aDuty mode: &2&oon'
  admin_duty_off: '%prefix% &cDuty mode: &4&ooff'
  freeze_player_on: '%prefix% &aYou got frozen by &2&o%executor%'
  freeze_player_off: '%prefix% &cYou got unfrozen by &4&o%executor%'
  freeze_executor_on: '%prefix% &aYou froze &2&o%player%'
  freeze_executor_off: '%prefix% &cYou unfroze &4&o%player%'
  admin_freeze_dtr_enable: '%prefix% &aYou froze &2&o%faction_name%&a''s DTR to: &o%dtr%'
  admin_freeze_dtr_disable: '%prefix% &aYou unfroze &2&o%faction_name%&a''s DTR'
  setspawn: '%prefix% &aYou set spawn of &2&o%world% &ato &2&o%location_x%, %location_y%,   %location_z%&a!'
  spawn_teleported: '%prefix% &aYou have been teleported to the world''s spawn!'
  faction_admin_withdraw: '%prefix% &c&l%executor% &cdeposited &c&l%amount% &cinto the faction''s bank!'
  faction_admin_deposit: '%prefix% &c&l%executor% &cwithdrew &c&l%amount% &cfrom the faction''s bank!'
  admin_set_playerfaction: '%prefix%&1 You successfully put &6&o%player% in the %faction_name% faction'
  set_faction_name: '%prefix% &eFaction''s name changed by &6&o%executor% &eto &6&o%faction_name%&e!'
  admin_set_dtr: '%prefix% &eYou have successfully set the DTR of &6&o%faction_name%&e faction to &6&o%new_dtr%'
  admin_set_faction_name: '%prefix% &1You have successfully changed the name of the faction to &e%faction_name%'
  give_money: '%prefix% &eYou got &6&o%amount% &efrom &6&o%executor%&e!'
  take_money: '%prefix% &6&o%executor%&e took &6&o%amount% &efrom you!'
  set_faction_leader_by_admin: '%prefix% &6&o%executor%&e set &6&o%player% &eto faction leader!'
  delete_faction_by_admin: '%prefix% &6&o%executor%&e deleted the &6&o%faction_name% &efaction!'
  vanish_enabled: '%prefix% &aVanish enabled!'
  vanish_disable: '%prefix% &cVanish disabled!'
  not_in_duty: '%prefix% &cYou are not in staff duty!'
PvP:
  cant_damage_admin: '%prefix% &cYou can''t attack while you are in duty mode'
  cant_damage_protected_area: '%prefix% &cYou can''t attack while you are in a protected area!'
  combat_message: '%prefix% &7You are now in combat &a[%sec% sec]'
  teammate_damage: '%prefix% &cYou can''t damage your teammate!'
  pvp_timer_enable: '%prefix% &aYou no longer have any pvp protection.'
  pvp_timer_already_enable: '%prefix% &cYou do not have any timers active.'
  kill_message_broadcast: '&4&l%killer%&f[%killer_kills%] slained &4&l%victim%&f[%victim_kills%] using [&b&o%killer_weapon%&f]'
  kill_message_broadcast_without_killer: '&4&l%victim%&f[%victim_kills%] died'
  cant_damage_while_pvptimer: '%prefix% &cYou can''t attack while you have a PvP timer on you!'
  cant_damage_while_pvptimer_victim: '%prefix% &cThis player has a PvP timer!'
  cant_damage_while_sotw_timer_active: '%prefix% &cThis player has an active SOTW timer!'
  cant_teleport_to_safezone: '%prefix% &cYou can''t teleport to a protected zone while you are in PvP tag'
Logout:
  logout_timer_started: '%prefix% &4&lLogout timer&r&4 started! Don''t move!'
  logout_timer_interrupted: '%prefix% &4Logout interrupted!'
  logout_timer_already_started: '%prefix% &4You are already started to logout!'
  logout_kick_message: '&aYou have been logged out safely!'
Enchant:
  enchant_confirm_button: '&aConfirm'
  enchant_cancel_button: '&cCancel'
  enchant_not_enough_xp: '%prefix% &cYou don''t have enough exp!'
  confirm_button_lore: '&6Costs: &e&n%xp_level% level'
Classes:
  bard_dont_have_enough_energy: '%prefix% &cYou don''t have enough energy to activate this. &4&l[Required %amount%]'
  bard_used_powerup: '%prefix% &6You used &b%effect% &6for &b&o%amount%&r&6. [&aBuffed teammates: &b&o%count%&r&6]'
Stuck:
  stuck_started: '%prefix% &aStuck timer started! You are getting teleported to a safe zone in &o&e%amount%&r&a seconds! Don''t move!'
  stuck_finished: '%prefix%  &bYou successfully teleported to a safe zone!'
  stuck_interrupted: '%prefix% &cYou interrupted the stuck timer!'
Waypoints:
  waypoint_enabled: '%prefix% &aYou successfully enabled waypoints!'
  waypoint_disabled: '%prefix% &cYou successfully disabled waypoints!'
Eotw:
  enable_eotw: '%prefix% &aEOTW started!'
  disable_eotw: '%prefix% &cEOTW disabled!'
  eotw_already_started: '%prefix% &cEOTW already started!'
  enable_sotw: '%prefix% &aSOTW started!'
  disable_sotw: '%prefix% &cSOTW disabled!'
  enable_deathmatch: '%prefix% &aDeathmatch started!'
  disable_deathmatch: '%prefix% &cDeathmatch disabled!'
  eotw_start_title: '&4&nEOTW&r &cStarted!'
  eotw_start_subtitle: '&c&oWatch out! Border is shrinking!'
Koth:
  updated_koth_rewards: '%prefix% &aSuccessfully saved rewards!'
  claim_koth_rewards: '%prefix% &aYou claimed KoTH rewards!'
  koth_invalid_name: '%prefix% &cThis KoTH doesn''t exits!'
  koth_faction_winner: '%prefix% &aThe &6&o%faction_name%&a won the &6&o%koth%&a KoTH!'
  koth_success_create: '%prefix% &aSuccessfully created the &6&o%faction_name%&a KoTH!'
  koth_capturing_started: '%prefix% &aSomeone started to occupy the &6&o%faction_name%&a KoTH!'
  koth_holding: '%prefix% &aYou holding the &6&o%faction_name%&a KoTH!'
  koth_capturing_ended: '%prefix% &aThe occupation of KoTH &6&o%faction_name%&a was interrupted!'
  koth_capture_timer: '%prefix% &aSomeone is capturing &6&o%faction_name%&a (%format_time%)'
  koth_start_title: '&a%faction_name%'
  koth_start_subtitle: '&2&oCapture the zone!'
  koth_failed_not_valid_claim: '%prefix% &cThis faction does not have a valid KoTH claim!'
Lives:
  lives_get: '%prefix% &2&o%player% &ahas &2&o%lives%&a lives.'
  lives_take_executor: '%prefix% &aYou removed from &2&o%player% &2&o%lives% &alives. Player has &2&o%leftlives%&a lives left!'
  lives_take_player: '%prefix% &2&o%executor%&a removed &2&o%lives%&a from you. &alives. You have &2&o%leftlives%&a lives left!'
  lives_give_executor: '%prefix% &aYou gave &2&o%lives% &alives to &2&o%player%&a. Player has &2&o%leftlives%&a lives now.'
  lives_give_player: '%prefix% &2&o%executor%&a gave you &2&o%lives% &alive. You have &2&o%leftlives% &alive now!'
  lives_set_executor: '%prefix% &aYou set &2&o%player%&a lives to &2&o%lives%&a.'
  lives_set_player: '%prefix% &2&o%executor%&a set your lives to &2&o%lives%&a.'
Gui:
  gui_rank_created: '%prefix% &bYou have successfully created rank: &b&o%rank%!'
  gui_rank_change: '%prefix% &bYou have successfully changed the rank of &b&o%player%&b to: &b&o%rank%!'
  gui_rank_already_have: '%prefix% &cThis user already have this rank.'
  gui_rename_text: Enter rank name
  gui_rename_faction_text: Enter faction name
  gui_invite_player: Enter a player name
  gui_create_rank_text: Enter rank name
  gui_invalid_type_text: Invalid name!
  gui_bad_word: Don't use forbidden words.
  gui_priority_saved: '%prefix% &aYou successfully saved the changes!'
  rename_faction: '%prefix% §aSuccessfully renamed faction '
  gui_request_ally: Enter ally name
Subclaims:
  subclaim_created: '%prefix% &aSubclaim successfully created!'
  subclaim_cant_create: '%prefix% &cYou can''t create a subclaim here!'
  subclaim_no_access: '%prefix% &cAccess denied!'
  subclaim_lower_rank: '%prefix% &cYou must type a lower rank or your rank!'
Rollback:
  rollback_successfully_rollbacked: '%prefix% &aYou successfully setted %player%''s inventory to this!'
  rollback_dont_have_rollback: '%prefix% &cThis player doesn''t have saved inventory!'
  rollback_not_found: '%prefix% &cThis ID does not have rollback!'
Mountain:
  mountain_respawned: '%prefix% &eRespawned all the blocks for &cMountain&e!'
  mountain_remaining: '%prefix% &cMountain&e respawn in %time%!'
CustomTimers:
  customt_created: '%prefix% &aCustom timer successfully created!'
  customt_deleted: '%prefix% &aCustom timer successfully deleted!'
  customt_edited: '%prefix% &aCustom timer successfully edited!'
  customt_no_active_timer: '%prefix% &cNo available active timers!'
  customt_not_found: '%prefix% &cThis timer not found!'
  already_created: '%prefix% &aThis name already in use!'
Language:
  language_not_found: '%prefix% &cThis language does not exists on this server!'
  language_current: '%prefix% &aYour language is &2&o%language%&a.'
  language_set: '%prefix% &aYou have successfully set your language to: &2&o%language%&a.'
Sotw:
  sotw_start_title: '&6&nSOTW&r &eStarted!'
  sotw_start_subtitle: '&a&oPreparation has begun!'
  sotw_end_title: '&4&nSOTW&r &cEnded!'
  sotw_end_subtitle: '&c&oGood Luck!'
coordinates_command:
- ' '
- '&7&m-----&2&o Coordinates &7&m-----'
- '&aGlowstone: &f500, 250'
- '&aEnd Portal: &f1000, 1000'
- ' '
faction_show:
- '&8&m        &c %faction_name% &f[%faction_status%&f] &8&m        '
- '&7&l» &eLeader: &a%leader_name%'
- ' '
- '&6Members &7[%members_online%/%members_count%]'
- '%members_list_categories_and_members%'
- ' '
- '&7┌─'
- '&7│ &eBalance: &a$%faction_balance%'
- '&7│ &eDTR: &a%faction_dtr%&7/&a%faction_max_dtr% &eRaidable: &a%faction_raidable%'
- '&7│ &eDTR Regenerating: %faction_dtr_regen'
- '&7│ &eHome Location: &a%faction_pos%'
- '&7│ &ePoints: &a%faction_points%'
- '&7├ &eKills: &a%faction_kills%'
- '&7├ &eDeaths: &a%faction_deaths%'
- '&7└─'
claim_info_admin:
- '%prefix% &6Spawn claiming information:'
- '&7&l» &ePress &6&o[RIGHT] &eclick on the ground, to place one of the positions!'
- '&7&l» &ePress &6&o[LEFT] &eclick on the ground, to place the other position!'
- '&eTo accept the claim, press &bShift + Right Click'
- '&eTo discard the claim, press &bShift + Left Click'
claim_info:
- '%prefix% &6Claiming information:'
- '&7&l» &ePress &6&o[RIGHT] &eclick on the ground, to place one of the positions!'
- '&7&l» &ePress &6&o[LEFT] &eclick on the ground, to place the other position!'
- '&eTo accept the claim, press &bShift + Right Click'
- '&eTo discard the claim, press &bShift + Left Click'
commands:
- §9/f create <Name> §7- Create your faction
- §9/f show [Faction] §7- Show faction
- §9/f claim §7- Claiming
- §9/f invite <Player> §7- Invite player to your faction
- §9/f join §7- Join to a faction
- §9/f leave §7- Leave from your faction
- §9/f deposit <Amount> §7- Deposit money to your faction bank
- §9/f withdraw <Amount> §7- Withdraw money from faction bank
- §9/f sethome §7- Sets a home to your faction
- §9/f home §7- Teleport to faction's home
- §9/f reload [file] §7- Reload files
koth_commands:
- §9/koth create <Name> §7- Create the koth
- §9/koth setcapturezone <Name> §7- Claim the koth place (CAPTURE ZONE)
- §9/koth setnatrualzone <Name> §7- Claim the koth place (NEUTRAL ZONE)
- §9/koth setreward §7- Set the koth reward with GUI
admin_commands:
- §9/admin duty §7- Entering duty mode
- §9/admin deposit <Faction> <Amount> §7- Deposit x amount money to a faction
- §9/admin withdraw <Faction> <Amount> §7- Withdraw x amount money from a faction
- §9/admin freeze <Player> §7- Freeze/Unfreeze a player
- §9/admin kick <Player> §7- Kick a player from the server
- §9/admin setfaction <Player> <Faction> §7- Add the player to a faction
- §9/admin removefaction <Player> <Faction> §7- Remove the player from a faction
- §9/admin eotw §7- Starts the EOTW (End Of The World) (Time in the config file)
- §9/admin deletefaction <Faction> §7- Delete the selected faction
- §9/admin setleader <Faction> <newLeader> §7- Set the player to a faction leader
- §9/admin givemoney <Player> <Amount> §7- Gives x amount money to a player
- §9/admin takemoney <Player> <Amount> §7- Takes x amount money from a player
- §9/admin setfactionname <Faction> <Name> §7- Sets a faction to a new name
- §9/admin spawnclaim <state> §7- Starts the spawn claiming method!
```