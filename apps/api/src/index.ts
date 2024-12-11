import { ability } from "@saas/auth";

const usarCanInviteSomeoneElse = ability.can('invite', 'User');
const usarCanDeleteUser = ability.can('delete', 'User');

const useCannotDeleteUser = ability.cannot('delete', 'User');

console.log(usarCanInviteSomeoneElse);
console.log(usarCanDeleteUser);

console.log(useCannotDeleteUser);