import React from "react";
import ResourceCard from "./ResourcesCard"; 
import { Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ResourcesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate("/resources")}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Resources</span>
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Essential Trading & Crypto Platforms Guide
          </h1>

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <span>•</span>
            <time>Updated July 2023</time>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            A curated guide to the best trading platforms, crypto tools, and digital wallets. Whether you're just starting out or looking to level up your trading game, we've got you covered with detailed insights and recommendations.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Trading Platforms
            </h2>
            <div className="space-y-8">
              <ResourceCard
                title="Robinhood"
                description="Perfect for beginners. Offers a simple, user-friendly interface for stock trading with commission-free trades. Great starting point for new investors."
                link="https://robinhood.com"
                difficulty="Beginner"
              />
              <ResourceCard
                title="WeBull"
                description="More advanced platform with detailed charts, technical indicators, and extended trading hours. Good for intermediate traders who need more analysis tools."
                link="https://webull.com"
                difficulty="Intermediate"
              />
              <ResourceCard
                title="Moomoo"
                description="Advanced trading platform with professional-grade tools, real-time level 2 data, and sophisticated charting capabilities. Ideal for experienced traders."
                link="https://www.moomoo.com"
                difficulty="Advanced"
              />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Crypto Tools</h2>
            <div className="space-y-8">
              <ResourceCard
                title="DexScreener"
                description="Essential tool for crypto traders to analyze decentralized exchanges (DEX). Provides real-time charts, trading volume, and liquidity information for various tokens across multiple chains."
                link="https://dexscreener.com"
              />
              <ResourceCard
                title="Coinbase"
                description="Popular cryptocurrency exchange platform. Easy to use for buying, selling, and trading major cryptocurrencies. Offers educational resources and secure storage for digital assets."
                link="https://www.coinbase.com"
                difficulty="Beginner"
              />
            </div>
          </section>

          {/* Wallets Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Wallets</h2>
            <div className="space-y-8">
              <ResourceCard
                title="Cold Wallet"
                description="A cold wallet is a cryptocurrency wallet that's not connected to the internet, making it highly secure against online threats. Perfect for long-term storage of significant crypto assets."
                link="https://www.ledger.com"
              />
              <ResourceCard
                title="Phantom Wallet"
                description="A user-friendly crypto wallet for Solana blockchain. Allows you to store, send, receive, and stake SOL and other Solana-based tokens. Essential for interacting with Solana DApps."
                link="https://phantom.app"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResourcesPage;


