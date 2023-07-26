import { FC } from "react";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LivejournalShareButton,
  LivejournalIcon,
  MailruShareButton,
  MailruIcon,
  OKShareButton,
  OKIcon,
  PinterestShareButton,
  PinterestIcon,
  PocketShareButton,
  PocketIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
} from "react-share";

import "./Socials.scss";

export const Socials: FC = () => {
  const iconsSize = 32;
  return (
    <div className="socials">
      <FacebookShareButton url={`${window.location.href}`}>
        <FacebookIcon size={iconsSize} round />
      </FacebookShareButton>
      <EmailShareButton url={`${window.location.href}`}>
        <EmailIcon size={iconsSize} round />
      </EmailShareButton>
      <FacebookShareButton url={`${window.location.href}`}>
        <FacebookIcon size={iconsSize} round />
      </FacebookShareButton>
      <HatenaShareButton url={`${window.location.href}`}>
        <HatenaIcon size={iconsSize} round />
      </HatenaShareButton>
      <InstapaperShareButton url={`${window.location.href}`}>
        <InstapaperIcon size={iconsSize} round />
      </InstapaperShareButton>
      <LineShareButton url={`${window.location.href}`}>
        <LineIcon size={iconsSize} round />
      </LineShareButton>
      <LinkedinShareButton url={`${window.location.href}`}>
        <LinkedinIcon size={iconsSize} round />
      </LinkedinShareButton>
      <LivejournalShareButton url={`${window.location.href}`}>
        <LivejournalIcon size={iconsSize} round />
      </LivejournalShareButton>
      <MailruShareButton url={`${window.location.href}`}>
        <MailruIcon size={iconsSize} round />
      </MailruShareButton>
      <OKShareButton url={`${window.location.href}`}>
        <OKIcon size={iconsSize} round />
      </OKShareButton>
      <PinterestShareButton media="" url={`${window.location.href}`}>
        <PinterestIcon size={iconsSize} round />
      </PinterestShareButton>
      <PocketShareButton url={`${window.location.href}`}>
        <PocketIcon size={iconsSize} round />
      </PocketShareButton>
      <RedditShareButton url={`${window.location.href}`}>
        <RedditIcon size={iconsSize} round />
      </RedditShareButton>
      <TelegramShareButton url={`${window.location.href}`}>
        <TelegramIcon size={iconsSize} round />
      </TelegramShareButton>
      <TumblrShareButton url={`${window.location.href}`}>
        <TumblrIcon size={iconsSize} round />
      </TumblrShareButton>
      <TwitterShareButton url={`${window.location.href}`}>
        <TwitterIcon size={iconsSize} round />
      </TwitterShareButton>
      <ViberShareButton url={`${window.location.href}`}>
        <ViberIcon size={iconsSize} round />
      </ViberShareButton>
      <VKShareButton url={`${window.location.href}`}>
        <VKIcon size={iconsSize} round />
      </VKShareButton>
      <WhatsappShareButton url={`${window.location.href}`}>
        <WhatsappIcon size={iconsSize} round />
      </WhatsappShareButton>
      <WorkplaceShareButton url={`${window.location.href}`}>
        <WorkplaceIcon size={iconsSize} round />
      </WorkplaceShareButton>
    </div>
  );
};
