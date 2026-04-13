import { NextRequest, NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;

interface TelegramUpdate {
  message?: {
    chat: {
      id: number;
      type: string;
      title?: string;
      first_name?: string;
      last_name?: string;
      username?: string;
    };
    from?: {
      id: number;
      first_name?: string;
      last_name?: string;
      username?: string;
    };
    text?: string;
    forward_from_chat?: {
      id: number;
      type: string;
      title?: string;
    };
  };
}

async function sendMessage(chatId: number, text: string, parseMode = "HTML") {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: parseMode,
    }),
  });
}

function formatIdResponse(update: TelegramUpdate): string {
  const msg = update.message!;
  const chat = msg.chat;
  const from = msg.from;

  // Forwarded from channel
  if (msg.forward_from_chat) {
    const fwd = msg.forward_from_chat;
    return [
      `📡 <b>Forwarded Chat ID</b>`,
      ``,
      `<b>Chat ID:</b> <code>${fwd.id}</code>`,
      `<b>Type:</b> ${fwd.type}`,
      fwd.title ? `<b>Title:</b> ${fwd.title}` : "",
      ``,
      `—`,
      `<b>Your ID:</b> <code>${from?.id}</code>`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  // Group/supergroup
  if (chat.type === "group" || chat.type === "supergroup") {
    return [
      `👥 <b>Group Info</b>`,
      ``,
      `<b>Group ID:</b> <code>${chat.id}</code>`,
      chat.title ? `<b>Title:</b> ${chat.title}` : "",
      ``,
      `—`,
      `<b>Your ID:</b> <code>${from?.id}</code>`,
    ]
      .filter(Boolean)
      .join("\n");
  }

  // Private chat (default)
  const name = [from?.first_name, from?.last_name].filter(Boolean).join(" ");
  return [
    `🆔 <b>Your Telegram ID</b>`,
    ``,
    `<b>ID:</b> <code>${from?.id}</code>`,
    name ? `<b>Name:</b> ${name}` : "",
    from?.username ? `<b>Username:</b> @${from.username}` : "",
    ``,
    `Tap the ID above to copy it.`,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const update: TelegramUpdate = await request.json();

    if (update.message) {
      const text = update.message.text;
      const chatId = update.message.chat.id;

      if (text === "/start") {
        await sendMessage(
          chatId,
          [
            `👋 <b>Welcome!</b>`,
            ``,
            `Send me any message and I'll tell you your Telegram ID.`,
            ``,
            `You can also:`,
            `• Add me to a <b>group</b> to get the group ID`,
            `• <b>Forward</b> a message from a channel to get its ID`,
          ].join("\n")
        );
      } else {
        await sendMessage(chatId, formatIdResponse(update));
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // Always 200 for Telegram
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ status: "ok", bot: "telegram-id" });
}
