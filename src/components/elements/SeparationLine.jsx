import { Icon } from '@iconify/react';

export const SeparationLine = () => {
  return (
    <div class="inline-flex items-center justify-between w-[80%] text-zinc-400 text-xl">
      <div class="w-[47%] shadow-lg my-8">
        <hr class="w-full h-[2px]  bg-zinc-400 border-0 rounded opacity-35" />
      </div>
      <div class="absolute px-4 -translate-x-1/2 left-1/2">
        <Icon icon={'arcticons:ukraine-tryzub'} />
      </div>
      <div class="w-[47%] shadow-lg my-8">
        <hr class="w-full h-[2px]  bg-zinc-400 border-0 rounded opacity-35" />
      </div>
    </div>
  );
};
